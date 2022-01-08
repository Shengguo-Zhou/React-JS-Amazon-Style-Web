import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCYuE4UdGD6RJA3Y1icf7WZqRy92UqzdxE",
    authDomain: "clone-e1751.firebaseapp.com",
    projectId: "clone-e1751",
    storageBucket: "clone-e1751.appspot.com",
    messagingSenderId: "369647327575",
    appId: "1:369647327575:web:d8cd07ef9e8e626f454612",
    measurementId: "G-T71KS5KT7R"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
