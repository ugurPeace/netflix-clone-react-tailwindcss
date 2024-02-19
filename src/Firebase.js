// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpLSHdsLBpUFYsVPefAdifbAABKx_ZpYE",
  authDomain: "netflix-react-tailwind-ugur.firebaseapp.com",
  projectId: "netflix-react-tailwind-ugur",
  storageBucket: "netflix-react-tailwind-ugur.appspot.com",
  messagingSenderId: "903301810376",
  appId: "1:903301810376:web:7314bbb73e47f9728bfdfd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
