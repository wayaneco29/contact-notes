import firebase from '../../../firebase/firebase';

export const currentUser = (action) => ({
    type: "SELECT_CURRENT_USER",
    payload: action
})
