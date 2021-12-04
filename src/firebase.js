import firebase from "firebase/app"
import "firebase/auth";
import "firebase/storage"
import "firebase/firestore"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyADs85dUr7-0priniEcSlcB80j07-xhGKE",
    authDomain: "yourchatv2.firebaseapp.com",
    projectId: "yourchatv2",
    storageBucket: "yourchatv2.appspot.com",
    messagingSenderId: "1543908766",
    appId: "1:1543908766:web:f72f02ac10d08104d43a8f"
}).auth();