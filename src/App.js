import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import firebase, {createCurrentUser} from './firebase/firebase';
import {currentUser} from './redux/actions/user-auth/UserAuth.actions';

import Navigation from './components/navigation/Navigation.component';
import AddContact from './components/add-contact/AddContact.component';
import ContactList from './components/contact-list/ContactList.component';

import './App.css';

const styles = {
  appInner: {
    display: 'flex',
    padding: '40px 0px'
  },
  side1: {
    flex: 1
  },
  side2: {
    flex: 2
  }
}

const App = ({currentUser}) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async(user) => {
      if(!user) currentUser(null);
      currentUser(user)
    })
  })

  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <div style={styles.appInner} className="app-inner">
          <div style={styles.side1} className="app-side-1">
            <AddContact />
          </div>
          <div style={styles.side2} className="app-side-2">
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  currentUser: (user) => dispatch(currentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
