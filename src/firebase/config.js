import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQaAwbRE0_JEUKSSU7tSO_NveVyMo3Woo",
  authDomain: "dincuycell.firebaseapp.com",
  projectId: "dincuycell",
  storageBucket: "dincuycell.appspot.com",
  messagingSenderId: "37243844421",
  appId: "1:37243844421:web:a4bbdbf6fb15df90b4702c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
