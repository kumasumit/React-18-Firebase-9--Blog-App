// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP3mtivpRIe8dIbuCsBMUkSWEBxhUbUIs",
  authDomain: "react-hooks-blog-51ba9.firebaseapp.com",
  projectId: "react-hooks-blog-51ba9",
  storageBucket: "react-hooks-blog-51ba9.appspot.com",
  messagingSenderId: "383875426824",
  appId: "1:383875426824:web:4b8ee37d8bfe5016e8ffbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
//we finally export db to use it our app.
