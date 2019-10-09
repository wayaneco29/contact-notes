import React from 'react';
import { connect} from 'react-redux';

import {getContacts} from '../../redux/actions/contact/Contact.actions';
import firebase, {signInWithGoogle} from '../../firebase/firebase';

import Spinner from '../spinner/spinner';

import './navigation.styles.scss';

const Navigation = ({user, getContacts}) => {
    const [loading, setLoading] = React.useState(false);

    const signOut = async () => {
        setLoading(true)
        await firebase.auth().signOut();
        getContacts(null)
        setLoading(false)
    }

    return (
        <nav id="nav">
            <div className="container">
                <div className="nav-inner">
                    <div className="nav-logo">Save Contact App</div>
                    {
                        user ? 
                        (<button className="btn" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={signOut}>{loading ? <Spinner /> : null} SIGN OUT</button>)
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