# Running `set-admin.js`

This document describes secure steps to run `scripts/set-admin.js` to add/remove the `admin` custom claim for a Firebase Auth user.

Prerequisites
- A Firebase service account JSON (Admin SDK) downloaded from the Firebase Console / Project settings → Service accounts → Generate new private key.
- Node.js installed on the machine where you run the script.

Install dependencies (project root):

```bash
npm install firebase-admin yargs
```

Quick run examples

- By email (Windows PowerShell):

```powershell
# from project root
npm run set-admin -- --serviceAccount "C:\path\to\serviceAccountKey.json" --email "admin@example.com" --admin true
```

- By UID (Linux / macOS / WSL):

```bash
npm run set-admin -- --serviceAccount ./serviceAccountKey.json --uid AAAABBBBCCCC --admin true
```

Unset admin claim

```bash
npm run set-admin -- --serviceAccount ./serviceAccountKey.json --uid AAAABBBBCCCC --admin false
```

Notes & security
- Keep the service account JSON private. Do NOT commit it to the repository.
- Run the script from a secure environment (developer machine or protected CI job) that has access to the service account file.
- After setting the custom claim, the client user should sign out and sign back in to see the updated claims.

If you want, I can prepare a small PowerShell snippet to securely copy the service account to the server and run this script there — tell me which server OS and whether you use SSH/WinRM. 