const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');

admin.initializeApp();
const db = admin.firestore();
const bucket = admin.storage().bucket();

// Helper: send email to admin (uses environment config)
async function sendAdminEmail(subject, text) {
  // NOTE: configure SMTP in Functions environment config: `firebase functions:config:set smtp.host=...`
  const host = functions.config().smtp?.host;
  if (!host) {
    console.warn('SMTP not configured; skipping email');
    return;
  }
  const transporter = nodemailer.createTransport({
    host,
    port: functions.config().smtp.port || 587,
    secure: false,
    auth: {
      user: functions.config().smtp.user,
      pass: functions.config().smtp.pass,
    },
  });

  await transporter.sendMail({
    from: functions.config().smtp.from || 'no-reply@al-farabi.com',
    to: functions.config().admin?.email || 'admin@al-farabi.com',
    subject,
    text,
  });
}

// Generate a simple PDF brochure and upload to Storage
async function generatePdfBrochure(requestData, filename) {
  const doc = new PDFDocument();
  const tmpPath = `/tmp/${filename}`;
  const fs = require('fs');
  const stream = fs.createWriteStream(tmpPath);
  doc.pipe(stream);
  doc.fontSize(20).text('Al Farabi International Group', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(`Request from: ${requestData.companyName || 'N/A'}`);
  doc.text(`Country: ${requestData.country || 'N/A'}`);
  doc.text(`Project Type: ${requestData.projectType || 'N/A'}`);
  doc.text(`Required Crews: ${JSON.stringify(requestData.requiredCrews)}`);
  doc.end();

  await new Promise((resolve) => stream.on('finish', resolve));
  // upload
  await bucket.upload(tmpPath, { destination: `brochures/${filename}` });
  // delete temp
  fs.unlinkSync(tmpPath);
}

// HTTPS function to receive external requests (public form submissions)
exports.submitRequest = functions.https.onRequest(async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
    const body = req.body || {};
    // Basic validation
    if (!body.companyName || !body.email) {
      return res.status(400).send({ error: 'companyName and email are required' });
    }

    // Create request in Firestore with server-controlled fields
    const reqDoc = {
      companyName: body.companyName,
      country: body.country || null,
      email: body.email,
      projectType: body.projectType || null,
      requiredCrews: body.requiredCrews || null,
      message: body.message || null,
      status: 'new',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    const docRef = await db.collection('requests').add(reqDoc);

    // Generate a brochure PDF for admin review (async - best effort)
    const filename = `request-${docRef.id}.pdf`;
    await generatePdfBrochure(reqDoc, filename).catch((e) => {
      console.warn('PDF generation failed', e);
    });

    // Notify admin
    await sendAdminEmail('New Request Received', `New request ${docRef.id} from ${reqDoc.companyName}`)
      .catch((e) => console.warn('Email send failed', e));

    return res.status(201).send({ id: docRef.id });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: 'internal' });
  }
});

// Callable function to be used by admin tools to change status (example)
exports.updateRequestStatus = functions.https.onCall(async (data, context) => {
  if (!context.auth || !context.auth.token.admin) {
    throw new functions.https.HttpsError('permission-denied', 'Only admin can update requests');
  }
  const { id, status } = data;
  if (!id || !status) throw new functions.https.HttpsError('invalid-argument', 'Missing id or status');
  await db.collection('requests').doc(id).update({ status, updatedAt: admin.firestore.FieldValue.serverTimestamp() });
  return { success: true };
});
