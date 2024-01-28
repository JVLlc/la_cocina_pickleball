// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDK6u22C5sjPjzgoIMqOhTtQck77eg3x9w",
    authDomain: "la-cocina-pickleball-xwpw9.firebaseapp.com",
    projectId: "la-cocina-pickleball-xwpw9",
    storageBucket: "la-cocina-pickleball-xwpw9.appspot.com",
    messagingSenderId: "12494109059",
    appId: "1:12494109059:web:248e8993fdd6704c121eb6"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, db, storage };


