// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEGvddkcMKawgHOFIyDYt6r36EjlorNXY",
  authDomain: "fir-auth-first-conceptual.firebaseapp.com",
  projectId: "fir-auth-first-conceptual",
  storageBucket: "fir-auth-first-conceptual.firebasestorage.app",
  messagingSenderId: "832474141674",
  appId: "1:832474141674:web:0fbac01f0794b4b342d893",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;