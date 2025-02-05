// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { env } from '../utils/env';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env('VITE_API_KEY'),
  authDomain: env('VITE_AUTH_DOMAIN'),
  projectId: env('VITE_PROJECT_ID'),
  storageBucket: env('VITE_STORAGE_BUCKET'),
  messagingSenderId: env('VITE_MESSAGING_SENDER_ID'),
  appId: env('VITE_APP_ID'),
  databaseURL: env('VITE_DATABASE_URL'),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Set persistence before any authentication actions
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Persistenced');
  })
  .catch(error => {
    console.log('Error', error.message);
  });

export { app, auth, database };
