import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBb940FXjcB2DGEE9OLCXFwuVykTSQYqYA",
  authDomain: "gamelogist-a0194.firebaseapp.com",
  projectId: "gamelogist-a0194",
  storageBucket: "gamelogist-a0194.appspot.com",
  messagingSenderId: "977488972932",
  appId: "1:977488972932:web:b0aa9fd6d41b57d494c6d1",
  measurementId: "G-F0Q8N2J4Y4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
