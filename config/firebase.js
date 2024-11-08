import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration with hardcoded values
const firebaseConfig = {
  apiKey: "AIzaSyCFHZpy5JGuuThYQ902Cc2kobtMX-BMrwY",
  authDomain: "chatify-01-a8222.firebaseapp.com",
  projectId: "chatify-01-a8222",
  storageBucket: "chatify-01-a8222.firebasestorage.app",
  messagingSenderId: "275754227276",
  appId: "1:275754227276:web:7fb69c7f9ccebc1047c6e9",
  measurementId: "G-04QJ9KL2H4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
