  Hi Lojy,

  Simple, direct steps for the frontend work and how to connect to Firebase (no Functions required).

  1) Pages & components
  - Pages: `home`, `about`, `services`, `crew`, `projects`, `contact`.
  - Important components: `hero`, `stat-cards`, `service-card`, `crew-table`, `request-form`, `project-card`.

  2) Data shape (requests)
  - Frontend writes a document to `requests` in Firestore. Minimal required fields:
    - `companyName` (string)
    - `email` (string)
    - `status` = `new` (string)
    - `createdAt` = `serverTimestamp()` (Firestore server timestamp)
  - Optional: `country`, `projectType`, `requiredCrews`, `message`.

  3) Local dev (quick)
  ```bash
  npm install
  npm start        # http://localhost:4200
  ```

  4) How the form submits (what I added)
  - I added a standalone `request-form` component at `src/app/shared/components/request-form/`.
  - It now uses `FirestoreService.addRequest(payload)` to write to Firestore.
  - `NotificationService` shows success/error messages. It uses an in-app toast system by default (no extra packages needed).

  Example usage (inside a component):
  ```ts
  import { FirestoreService } from 'src/app/shared/services/firestore.service';

  constructor(private fs: FirestoreService) {}

  await this.fs.addRequest({ companyName:'X', email:'a@b.com', status:'new', ... });
  ```

  5) Firebase setup (free plan)
  - Create a Firebase project in the Console and copy the client config.
  - Add the config to `src/environments/environment.firebase.ts` (I already filled this file with the project config if you used it).
  - Initialize only Firestore and Auth (do not enable Functions or Storage if you want to stay free):
  ```bash
  firebase login
  firebase init firestore auth hosting
  ```

  6) Security rules
  - We set Firestore rules so clients can `create` documents in `requests` with basic validation (status must be `new`, valid email, etc.). Only admins can read/update/delete requests.

  7) Test the form quickly
  - Open the app and go to the `contact` page. Fill the form and submit — you should see a toast on success and the document in Firestore Console → `requests`.

  8) Optional: nicer toasts
  - I added a built-in toast component so notifications work without dependencies.
  - If you want `ngx-toastr` later, we can attempt installation (requires Angular compatibility). For now the built-in toasts are good.

  9) Notes for later
  - When you want PDFs/emails, we will enable Blaze and add Cloud Functions to generate PDFs and send emails.



 
```



"Make it clean, make it fast."
Ahmed Helmy❤️
