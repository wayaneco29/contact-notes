import firebase from 'firebase';
import firebaseConfig from './config';

import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig);

// =========================================================================================================== //
// =============================================== CODE HERE ================================================= //
// =========================================================================================================== //

// =========================================================================================================== //
// =================================== GOOGLE SIGN IN========================================================= //
// =========================================================================================================== //
export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(data => {
            createCurrentUser(data);
        })
        .catch((error) => console.log(error))
}

// =========================================================================================================== //
// ======================================= CHECK IF USER EXISTS ============================================== //
// =========================================================================================================== //

export const createCurrentUser = async (data) => {
    if(!data) return;

    const userRef = await firebase.firestore().doc(`users/${data.user.uid}`);
    const userSnapShotData = await userRef.get();
    console.log(userSnapShotData)
    if(!userSnapShotData.exists) {
        const userData = {
            name: data.user.displayName,
            email: data.user.email
        }
        await userRef.set(userData)
    }

    return;
}

// =========================================================================================================== //
// ====================================== ADD CONTACT TO STORE =============================================== //
// =========================================================================================================== //

export const addContactToFirestore = async (id,data) => {
    try {
        const dataRef = await firebase.firestore().collection(`users/${id}/contacts/`);
        const collection = await dataRef.get();
        const collectionToAdd = {
            createdAt: new Date(),
            ...data
        }
        await dataRef.add(collectionToAdd)
    } catch(e) {
        
    }
}

// =========================================================================================================== //
// =============================== GET ALL CONTACTS ========================================================== //
// =========================================================================================================== //

export const getAllContacts = async (id) => {
    const contactsRef = await firebase.firestore().collection(`users/${id}/contacts`);
    const collectionRef = await contactsRef.orderBy("createdAt", "desc").get();
    const arr = [];

    collectionRef.docs.map(async data => {
        const contact = {
            id: data.id,
            ...data.data()
        }
        arr.push(contact)
    })

    return await arr;
}

// =========================================================================================================== //
// ========================================= UPDATE THE CONTACTS ============================================= //
// =========================================================================================================== //

export const updateContacts = async (userId, contactId, data) => {
    try {
        const updateContactRef = await firebase.firestore().doc(`users/${userId}/contacts/${contactId}`);
        await updateContactRef.update(data)
    } catch(e) {
        throw(e)
    }
}

// =========================================================================================================== //
// ========================================= DELETE CONTACTS ================================================= //
// =========================================================================================================== //

export const deleteContacts = async (userId, contactId) => {
    try {
        const deleteContactRef = await firebase.firestore().doc(`users/${userId}/contacts/${contactId}`);
        await deleteContactRef.delete()
    } catch(e) {
        throw(e)
    }
}

export default firebase;