// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA096ctO7BrKfZ9PolzV10FDh0ImEUqrrE',
  authDomain: 'learnlingo-e1004.firebaseapp.com',
  projectId: 'learnlingo-e1004',
  storageBucket: 'learnlingo-e1004.firebasestorage.app',
  messagingSenderId: '256476541611',
  appId: '1:256476541611:web:cdb25b4d9c60f3ec1bfdee',
  databaseURL:
    'https://learnlingo-e1004-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
