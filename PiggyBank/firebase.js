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
  apiKey: "AIzaSyB8D6oPus_pTHaseLuHcCXl-Rzac41OCeI",
  authDomain: "piggybank-82fd1.firebaseapp.com",
  projectId: "piggybank-82fd1",
  storageBucket: "piggybank-82fd1.appspot.com",
  messagingSenderId: "292913345177",
  appId: "1:292913345177:web:23f0fbcc2fd530c744be08",
  measurementId: "G-9JVJH74N17"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//const auth = getAuth();

export {auth, analytics}