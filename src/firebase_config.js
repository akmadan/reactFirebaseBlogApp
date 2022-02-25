// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


//configurations
const firebaseConfig = {
  apiKey: "AIzaSyDojj1AASZSxC6Ur40QXnC4rxAlZP9Sblo",
  authDomain: "reactfirebase-6d309.firebaseapp.com",
  projectId: "reactfirebase-6d309",
  storageBucket: "reactfirebase-6d309.appspot.com",
  messagingSenderId: "888725275235",
  appId: "1:888725275235:web:29831fa7caa22d3970ae56",
  measurementId: "G-RH2KGBLP06"
};


// initializations
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
export const provider = new GoogleAuthProvider(); 
