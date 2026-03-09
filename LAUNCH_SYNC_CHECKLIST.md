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
  - `settings: {}`

## 3. App Behavior
- User must login/register.
- On auth success:
  - Read from `users/{uid}/app_data`
  - Save all updates to same path.
- Local backup key is user-scoped:
  - `eantrax_data_{uid}`

## 4. Cross-device Sync
- Login with same account on web/app.
- Changes written to `users/{uid}/app_data` reflect on both.

## 5. Production Hardening
- Use HTTPS domain for web deployment.
- Set Firebase authorized domains correctly.
- Rotate Firebase API keys if exposed publicly in old builds.
- Add scheduled exports for disaster recovery.
