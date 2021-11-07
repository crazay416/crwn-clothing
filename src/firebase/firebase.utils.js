import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyAET2_y47ZTXosFHH1nZwGa68yWUJ_8FFs",
    authDomain: "crown-db-e23b7.firebaseapp.com",
    projectId: "crown-db-e23b7",
    storageBucket: "crown-db-e23b7.appspot.com",
    messagingSenderId: "391746135280",
    appId: "1:391746135280:web:8b1aedfe370c1b7dfe4e35",
    measurementId: "G-8MDGN0SHYM"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;