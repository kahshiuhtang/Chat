import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjfa0Dt2byRTPRw9NPQk9xmxi7OZb1Dbs",
  authDomain: "chat-app-f935d.firebaseapp.com",
  projectId: "chat-app-f935d",
  storageBucket: "chat-app-f935d.appspot.com",
  messagingSenderId: "1085682758902",
  appId: "1:1085682758902:web:74491753a5f4f3aaf168d7",
  measurementId: "G-WG20M1Z0SL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
