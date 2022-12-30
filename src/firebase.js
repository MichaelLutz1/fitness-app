// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAMGZi1CHa6-4nKxFXZC0rL-rECETBY90",
  authDomain: "fitness-tracker-36da8.firebaseapp.com",
  projectId: "fitness-tracker-36da8",
  storageBucket: "fitness-tracker-36da8.appspot.com",
  messagingSenderId: "884593678131",
  appId: "1:884593678131:web:9faeb68f2dc8478b6ed046",
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
export const auth = getAuth(fbApp);
