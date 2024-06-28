import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAAi1ioot3kGwwVoytf5wSwDGaovbfhW0c",

  authDomain: "saleekaapp.firebaseapp.com",

  projectId: "saleekaapp",

  storageBucket: "saleekaapp.appspot.com",

  messagingSenderId: "936152712381",

  appId: "1:936152712381:web:86f4f7dc51e0635f3f63d4",

  measurementId: "G-7EXHCKGKSM"

};


// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
const analytics = getAnalytics(FIREBASE_APP);