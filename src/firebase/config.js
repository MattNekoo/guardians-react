import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC7tU2hMVksLkmxVPXr6xWDpAKMPc6O4GM",
    authDomain: "guardians-9a7ed.firebaseapp.com",
    projectId: "guardians-9a7ed",
    storageBucket: "guardians-9a7ed.appspot.com",
    messagingSenderId: "1011350761425",
    appId: "1:1011350761425:web:aeaa0fcd04d76790aafaf0",
    measurementId: "G-H870E37L0N"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app)

export { db };