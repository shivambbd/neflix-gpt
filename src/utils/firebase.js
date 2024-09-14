// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzmgYIydJDwVbTjKKmlmVyHJVAZ9Sonqk",
  authDomain: "netflixgpt-33dd6.firebaseapp.com",
  projectId: "netflixgpt-33dd6",
  storageBucket: "netflixgpt-33dd6.appspot.com",
  messagingSenderId: "483580534034",
  appId: "1:483580534034:web:5e3df8061ce8e501c2e7cb",
  measurementId: "G-XVHV8RM4XZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
