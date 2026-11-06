# Launch Sync Checklist

## 1. Firebase Console
- Enable **Authentication**:
  - Email/Password provider ON
- Realtime Database:
  - Import rules from `firebase-database.rules.json`

## 2. Data Model
- Per-user path:
  - `users/{uid}/app_data`
- App data object:
  - `documents: []`
  - `clients: []`
  - `catalog: []`
  - `crm: { leads: [] }`
  - `settings: {}`

## 3. App Behavior
- User logs in or registers.
- On auth success:
  - Loads immediately from user-scoped local storage (`eantrax_data_{uid}`) for instant rendering.
  - Fetches existing cloud data from `users/{uid}/app_data` without prematurely overwriting.
  - Attaches real-time listener (`dbRef.on('value')`) for instant cross-device updates.
  - Automatically converts object-indexed Firebase responses to arrays.
  - Local backup key is user-scoped:
    - `eantrax_data_{uid}`

## 4. Cross-device Real-Time Sync
- Login with the same account on any device (Desktop, Laptop, iPhone, iPad, Android).
- Realtime listener reflects edits made on Device A to Device B immediately without reloading the page.
- Visual Cloud Sync pill in mobile header and desktop sidebar indicates status (Synced 🟢, Syncing 🔄, Offline 🟡).
- Manual tap on the sync pill triggers instant re-fetch.
- Offline support: changes queue in browser storage and sync as soon as internet connection is restored.

## 5. Production Hardening
- Use HTTPS domain for web deployment.
- Set Firebase authorized domains correctly.
- Rotate Firebase API keys if exposed publicly in old builds.
- Add scheduled exports for disaster recovery.
