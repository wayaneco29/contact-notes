import React from 'react';
import { connect} from 'react-redux';

import {getContacts} from '../../redux/actions/contact/Contact.actions';

import firebase, {signInWithGoogle} from '../../firebase/firebase';

import './navigation.styles.scss';

const Navigation = ({user, getContacts}) => {

    const signOut = async () => {
        await firebase.auth().signOut();
        getContacts(null)
    }

    return (
        <nav id="nav">
            <div className="container">
                <div className="nav-inner">
                    <div className="nav-logo">Save Contact App</div>
                    {
                        user ? 
                        (<button className="btn" onClick={signOut}>SIGN OUT</button>)
                         :
                        (<button className="btn" onClick={signInWithGoogle}>SIGN IN</button>)
                    }
                    
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    user: state.user.user
})

const mapDispatchToProps = dispatch => ({
    getContacts: data => dispatch(getContacts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);