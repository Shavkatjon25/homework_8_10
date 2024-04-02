
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAUhCgZJCViIjsi6Y02roYJplqB6B79FPg",
  authDomain: "chat-abe90.firebaseapp.com",
  projectId: "chat-abe90",
  storageBucket: "chat-abe90.appspot.com",
  messagingSenderId: "659138345458",
  appId: "1:659138345458:web:3dacc985f6783d7f3e936b",
  databaseURL:'https://chat-abe90-default-rtdb.asia-southeast1.firebasedatabase.app'
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const database = getDatabase(app);