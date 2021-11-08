// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPRUSETTS-w-GOQqxB3LXfseD4MVelT_8",
  authDomain: "todo-app-19fa6.firebaseapp.com",
  projectId: "todo-app-19fa6",
  storageBucket: "todo-app-19fa6.appspot.com",
  messagingSenderId: "465424008519",
  appId: "1:465424008519:web:05ee873ff06d2ce4877862",
  measurementId: "G-JHYSBGYV9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);