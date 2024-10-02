// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeZ-8dPrP5JpwKl-bYZgygrRg28tquOqE",
    authDomain: "shubhamtasklist.firebaseapp.com",
    projectId: "shubhamtasklist",
    storageBucket: "shubhamtasklist.appspot.com",
    messagingSenderId: "741342618721",
    appId: "1:741342618721:web:cad5e30572e35ba83df620"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth=getAuth();
// Initialize Firestore
const db = getFirestore(app);

export default db;
