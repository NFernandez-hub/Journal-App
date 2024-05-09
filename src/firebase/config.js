// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5HbzaGXTuPddBCpeuZNoQT9WEOhmPF7g",
    authDomain: "react-cursos-b45f5.firebaseapp.com",
    projectId: "react-cursos-b45f5",
    storageBucket: "react-cursos-b45f5.appspot.com",
    messagingSenderId: "193885020819",
    appId: "1:193885020819:web:4a712c637dca33ca9c6366"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)