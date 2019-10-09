const INITIAL_STATE ={
    contacts: null
}

const ContactReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "GET_CONTACTS": {
            return {
                ...state,
                contacts: action.payload
            }
        }
        default:
            return state;
    }
}

export default ContactReducer;