// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwYvpMkfQbhDFAvcaPQZ-a8FvaTJ86j6w",
    authDomain: "fir-project-641a7.firebaseapp.com",
    projectId: "fir-project-641a7",
    storageBucket: "fir-project-641a7.appspot.com",
    messagingSenderId: "853400779751",
    appId: "1:853400779751:web:ea241b6fe0c159b88a1b42",
    measurementId: "G-KF2ZQCPSRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
