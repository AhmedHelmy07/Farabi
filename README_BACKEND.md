# Backend (Firebase) - EgyWorkforce

This folder contains Firebase configuration and Cloud Functions scaffolding for the project.

What is included:
- `firebase.json` and `.firebaserc` (project placeholder)
- `firestore.rules` and `storage.rules` (security rules)
- `functions/` - Cloud Functions implementation (Node 18)

Quick setup and deploy:
1. Install Firebase CLI (if not installed):
```bash
npm install -g firebase-tools
```
2. Login and select project:
```bash
firebase login
firebase use --add
```
3. Install functions deps and deploy (without Storage if you don't use it):
```bash
cd functions
npm install
cd ..
# If you are not using Storage yet
firebase deploy --only "functions,firestore" --project al-farabi-3daa1

# If you enabled Storage and want to deploy it too
firebase deploy --only "functions,firestore,storage" --project al-farabi-3daa1
```

Notes:
- Configure SMTP and admin email using Firebase functions config, for example:
  ```bash
  firebase functions:config:set smtp.host=smtp.example.com smtp.user=xxx smtp.pass=yyy smtp.from="no-reply@al-farabi.com" admin.email=admin@al-farabi.com
  ```
- The `submitRequest` endpoint is an HTTPS function: `https://<region>-<project>.cloudfunctions.net/submitRequest`.
- All client writes to protected collections should be routed through functions or require auth with admin custom claims.

Note: We configured Firestore rules to allow public `create` on `requests` with validation (status=='new' etc.). That means the frontend can write requests directly to Firestore without Cloud Functions so you can stay on the free plan. Admins should review requests in the Firebase Console.

If you later upgrade to Blaze you can deploy Cloud Functions to generate PDFs, store them in Storage, and send email notifications. For now, keep using direct Firestore writes from the client.

Project id configured in this repo: `al-farabi-3daa1` (see `.firebaserc`).

Deploy commands (using the configured project):
```bash
firebase login
firebase use al-farabi-3daa1
firebase deploy --only functions,firestore,storage --project al-farabi-3daa1
```

Note: I cannot run `firebase deploy` from here because I don't have your Firebase account credentials. Run the commands above on your machine (or CI) after logging into Firebase.

Important: Deploying Cloud Functions requires enabling Google Cloud Build and related APIs. For production deploys, your Firebase project must be on the Blaze (pay-as-you-go) plan. To upgrade:

1. Open the Firebase Console project billing page:

```
https://console.firebase.google.com/project/al-farabi-3daa1/usage/details
```

2. Follow the prompts to enable billing/Blaze for the project.

After upgrading, rerun the deploy command:
```bash
firebase deploy --only "functions,firestore" --project al-farabi-3daa1
```

If you do not want to upgrade now, you can still test functions locally with the emulator:
```bash
firebase emulators:start --only functions,firestore
```
