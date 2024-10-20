// Import Firebase modules
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, setDoc, doc } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhSR5WnOY-FQcwpiDOSGZriVHNk6cPv88",
  authDomain: "exclusive-store-d488c.firebaseapp.com",
  projectId: "exclusive-store-d488c",
  storageBucket: "exclusive-store-d488c.appspot.com",
  messagingSenderId: "811270109033",
  appId: "1:811270109033:web:0294c7207a4f5da9de6ff8",
  measurementId: "G-XCMGZS1VWH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app); // Initialize Firestore
export default app;
