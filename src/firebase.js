// ─── FIREBASE CONFIGURATION ───────────────────────────────────────────────────
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBebYZshSwU8OO4CdxkfmmMhSG0SahxSl0",
  authDomain: "care-care-ke.firebaseapp.com",
  projectId: "care-care-ke",
  storageBucket: "care-care-ke.firebasestorage.app",
  messagingSenderId: "415980214135",
  appId: "1:415980214135:web:fa822fb3c2c77394fd3372",
  measurementId: "G-RJTRQEDR2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;