// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABI2RHJjPpP41xa4_WySWU6lW4cdkcGKs",
  authDomain: "netflix-gpt-dabb5.firebaseapp.com",
  projectId: "netflix-gpt-dabb5",
  storageBucket: "netflix-gpt-dabb5.firebasestorage.app",
  messagingSenderId: "589587769152",
  appId: "1:589587769152:web:17411e28462c606f91fca5",
  measurementId: "G-EFDJNQ2KTZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
