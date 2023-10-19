export const environment = {
  production: false,
  firebase: {
    projectId: process.env?.['FIREBASE_PROJECT_ID'],
    appId: process.env?.['FIREBASE_APP_ID'],
    storageBucket: process.env?.['FIREBASE_STORAGE_BUCKET'],
    apiKey: process.env?.['FIREBASE_API_KEY'],
    authDomain: process.env?.['FIREBASE_AUTH_DOMAIN'],
    messagingSenderId: process.env?.['FIREBASE_MESSAGING_SENDER_ID'],
    measurementId: process.env?.['FIREBASE_MEASUREMENT_ID'],
  },
};
