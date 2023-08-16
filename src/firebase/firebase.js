// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaSMILjyKNxtDWB4-GqH4sWXtWa8dFL7U",
    authDomain: "course-app-37181.firebaseapp.com",
    projectId: "course-app-37181",
    storageBucket: "course-app-37181.appspot.com",
    messagingSenderId: "231831313867",
    appId: "1:231831313867:web:11b552d5a7c8dfc50cea4e",
    measurementId: "G-LZR8LFF3LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
