import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    //Look in discord for keys to project
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_APIKEY,

    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTHDOMAIN,

    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECTID,

    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGEBUCKET,

    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGINGSENDERID,

    appId: process.env.EXPO_PUBLIC_FIREBASE_APPID,

    measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENTID

};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase