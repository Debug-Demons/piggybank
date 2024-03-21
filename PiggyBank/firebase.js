// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//Look at firebase console for keys to the api
const firebaseConfig = {
  apiKey: XXXXXXXXXXX,
  authDomain:XXXXXXXXXXX,
  projectId: XXXXXXXXXXX,
  storageBucket: XXXXXXXXXXX,
  messagingSenderId: XXXXXXXXXXX,
  appId: XXXXXXXXXXXXXX,
  measurementId: XXXXXXXXXX
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth

export {auth, analytics}