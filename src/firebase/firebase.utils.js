import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDiza0OIhPuyMvduyDHu5SvMig440Uokvs",
    authDomain: "crwn-db-b691b.firebaseapp.com",
    projectId: "crwn-db-b691b",
    storageBucket: "crwn-db-b691b.appspot.com",
    messagingSenderId: "805653455271",
    appId: "1:805653455271:web:4a68859895cf1052aed682",
    measurementId: "G-0CJET746YP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
