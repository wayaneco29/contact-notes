import firebase from 'firebase';
import firebaseConfig from './config';

import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig);

// =========================================================================================================== //
// =============================================== CODE HERE ================================================= //
// =========================================================================================================== //

/* GOOGLE SIGN IN */


export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(data => {
            createCurrentUser(data);
        })
        .catch((error) => console.log(error))
}

export const createCurrentUser = async (data) => {
    if(!data) return;
    const userRef = await firebase.firestore().doc(`users/${data.uid}`);
    const userSnapShotData = await userRef.get();

    if(!userSnapShotData.exists) {
        const userData = {
            name: data.user.displayName,
            email: data.user.email
        }
        await userRef.set(userData)
    }

    return console.log("User is already exist !")
}

export const addContactToFirestore = async (id,data) => {
    try {
        const dataRef = await firebase.firestore().collection(`users/${id}/contacts/`);
        const collection = await dataRef.get();
        await dataRef.add(data)
    } catch(e) {
        console.log(e)
    }
}

export const getAllContacts = async (id) => {
    const contactsRef = await firebase.firestore().collection(`users/${id}/contacts`);
    const collectionRef = await contactsRef.get();

    const arr = [];

    collectionRef.docs.map(async data => {
        arr.push(data.data())
    })

    return await arr;
}

export default firebase;