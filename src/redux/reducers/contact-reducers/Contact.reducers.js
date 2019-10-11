const INITIAL_STATE ={
    contacts: null,
    openModal: false,
    contactValue: null,
    openDeleteModal: false,
    contactId: null
}

const ContactReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "GET_CONTACTS": {
            return {
                ...state,
                contacts: action.payload
            }
        }
        case "UPDATE_CONTACTS": {
            return {
                ...state,
                contactValue: action.payload,
                openModal: true
            }
        }
        case "CLOSE_MODAL": {
            return {
                ...state,
                openModal: false,
                contactValue: null
            }
        }
        case "OPEN_DELETE_MODAL": {
            return {  
                ...state,
                openDeleteModal: true,
                contactId: action.payload
             }
        }
        case "CLOSE_DELETE_MODAL": {
            return {  
                ...state,
                openDeleteModal: false
             }
        }
        default:
            return state;
    }
}

export default ContactReducer;