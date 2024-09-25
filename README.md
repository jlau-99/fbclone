## Getting Started

This project requires a Google OAuth API and a firebase API, both of which are free. To create the Google API, follow the instructions at [https://developers.google.com/identity/protocols/oauth2/web-server], and create a `.env` file containing 
```
GOOGLE_CLIENT_ID = XXXXX
GOOGLE_CLIENT_SECRET = XXXXX
```

Then, create a firebase project, a firebase web application, and replace the configuration in `firebase.js`. Next, create a firestore database and a firebase storage.

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

