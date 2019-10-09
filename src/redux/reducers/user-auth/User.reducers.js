const INITIAL_STATE = {
    user: null
}

const UserReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SELECT_CURRENT_USER": {
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state;
    }
}
export default UserReducer;