// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCym8idvsLsPMwCBaQ8yP0e8V0qjVwiyv0",
  authDomain: "cloneflix-df4da.firebaseapp.com",
  projectId: "cloneflix-df4da",
  storageBucket: "cloneflix-df4da.appspot.com",
  messagingSenderId: "255392644388",
  appId: "1:255392644388:web:0cdaee415ae3b5b49507b1",
  measurementId: "G-XGN62P3V2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth };