//import userEvent from '@testing-library/user-event';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snaspShot = await userRef.get();

    if (!snaspShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData })
        }
        catch (error) {
            console.log("Error creating user.", error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
