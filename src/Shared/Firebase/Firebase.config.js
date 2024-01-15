// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXUBDqlwP0zfjUqlOHYnCCSDiZ-EJ17lA",
  authDomain: "final-project-42be1.firebaseapp.com",
  projectId: "final-project-42be1",
  storageBucket: "final-project-42be1.appspot.com",
  messagingSenderId: "319340129682",
  appId: "1:319340129682:web:28f9b94fcd7bfe3184e54b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;