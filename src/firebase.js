import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAm2ZScyRiK_NhcZkvSQcTCMVQ8ceLR4MM",
    authDomain: "unichat-2f891.firebaseapp.com",
    projectId: "unichat-2f891",
    storageBucket: "unichat-2f891.appspot.com",
    messagingSenderId: "1091402847084",
    appId: "1:1091402847084:web:a39d1a40f01c9ce3341949"
}).auth();