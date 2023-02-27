// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, 
  authDomain: "twitter-sahand.firebaseapp.com",
  projectId: "twitter-sahand",
  storageBucket: "twitter-sahand.appspot.com",
  messagingSenderId: "122112544112",
  appId: "1:122112544112:web:924b7bd702bd7877f953b5"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig): getApp();
const db= getFirestore();
const storage= getStorage();
export { app,db,storage};