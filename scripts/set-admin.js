#!/usr/bin/env node
/**
 * set-admin.js
 *
 * Usage:
 * 1) Install dependencies:
 *    npm install firebase-admin yargs
 *
 * 2) Run (example):
 *    node scripts/set-admin.js --serviceAccount ./serviceAccountKey.json --email admin@example.com --admin true
 *
 * Notes:
 * - The script requires a Firebase service account JSON with adequate IAM permissions ("Firebase Admin SDK" service account).
 * - Provide either --email or --uid. If both provided, --uid takes precedence.
 * - On Windows PowerShell, quote paths with double quotes if they contain spaces.
 *
 * This script sets/unsets the custom claim `admin: true` for a user.
 */

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .option('serviceAccount', { type: 'string', alias: 's', description: 'Path to service account JSON' })
  .option('email', { type: 'string', alias: 'e', description: 'User email to set admin claim on' })
  .option('uid', { type: 'string', alias: 'u', description: 'User UID to set admin claim on' })
  .option('admin', { type: 'boolean', alias: 'a', default: true, description: 'Set (true) or unset (false) admin claim' })
  .demandOption(['serviceAccount'])
  .help()
  .parse();

const serviceAccountPath = path.resolve(argv.serviceAccount);
if (!fs.existsSync(serviceAccountPath)) {
  console.error('Service account JSON not found at', serviceAccountPath);
  process.exit(1);
}

const serviceAccount = require(serviceAccountPath);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function run() {
  try {
    let uid = argv.uid;
    if (!uid && argv.email) {
      const userRecord = await admin.auth().getUserByEmail(argv.email);
      uid = userRecord.uid;
    }
    if (!uid) {
      console.error('Either --uid or --email must be provided');
      process.exit(1);
    }

    const claims = { admin: !!argv.admin };
    await admin.auth().setCustomUserClaims(uid, claims);
    console.log(`Set custom claim admin=${claims.admin} for uid=${uid}`);
    console.log('You may need to ask the user to re-login for the new claims to take effect.');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err && err.message ? err.message : err);
    process.exit(1);
  }
}

run();
