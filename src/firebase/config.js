// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMfK_6WKs0PF3KdZbQ9bK1xvryR1HLewo",
  authDomain: "ecommerce-beauty.firebaseapp.com",
  projectId: "ecommerce-beauty",
  storageBucket: "ecommerce-beauty.appspot.com",
  messagingSenderId: "884532622678",
  appId: "1:884532622678:web:fb2a2be722af882aa992f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);