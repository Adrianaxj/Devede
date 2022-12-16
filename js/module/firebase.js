// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc,
     doc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZdTzM814nS3vge6oWXCqvzDoxuivCIyM",
  authDomain: "devede-21e46.firebaseapp.com",
  projectId: "devede-21e46",
  storageBucket: "devede-21e46.appspot.com",
  messagingSenderId: "781162489313",
  appId: "1:781162489313:web:8740c2c86000ffacd99ea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db, collection, addDoc, getDocs, doc, deleteDoc, }
