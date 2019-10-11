import React from 'react';
import { connect} from 'react-redux';

import {getContacts} from '../../redux/actions/contact/Contact.actions';
import firebase, {signInWithGoogle} from '../../firebase/firebase';

import './navigation.styles.scss';

const Navigation = ({user, getContacts}) => {
    console.log(user)
    const [loading, setLoading] = React.useState(true);
    const [openOptions, setOpenOptions] = React.useState(false);

    const signOut = async () => {
        setLoading(true)
        await firebase.auth().signOut();
        setOpenOptions(false)
        getContacts(null)
        setLoading(false)
    }

    const handleClick = () => {
        setOpenOptions(!openOptions)
    }

    return (
        <nav id="nav">
            <div className="container">
                <div className="nav-inner">
                    <div className="nav-logo">Contact App</div>
                    {
                        user ? 
                        (
                            <div className="user-image-container">
                                <img src={user.photoURL} alt="image" className="image" onClick={handleClick}/>
                                {
                                    openOptions ? 
                                    (
                                        <div className="user-data">
                                            <p className="sign-out" onClick={signOut}>SIGN OUT</p>
                                        </div>
                                    ) : 
                                    null
                                }
                            </div>
                        )
                         :
                        (<button className="btn" onClick={signInWithGoogle}>SIGN IN</button>)
                    }
                    
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    user: state.user.user,
})

const mapDispatchToProps = dispatch => ({
    getContacts: data => dispatch(getContacts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);