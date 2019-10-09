import {combineReducers} from 'redux';

import UserReducer from './reducers/user-auth/User.reducers';
import ContactReducer from './reducers/contact-reducers/Contact.reducers';

export default combineReducers({
    user: UserReducer,
    contact: ContactReducer
})