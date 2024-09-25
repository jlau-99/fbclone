// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlvSz9jKRF6rcC9wiH_S20ZyyxLV6VHLQ",
  authDomain: "fbclone-3ffe1.firebaseapp.com",
  projectId: "fbclone-3ffe1",
  storageBucket: "fbclone-3ffe1.appspot.com",
  messagingSenderId: "633031066674",
  appId: "1:633031066674:web:f7ec8541f74edd6252e82b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
