import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import firebase, {createCurrentUser} from './firebase/firebase';
import {currentUser} from './redux/actions/user-auth/UserAuth.actions';

import Navigation from './components/navigation/Navigation.component';
import AddContact from './components/add-contact/AddContact.component';
import ContactList from './components/contact-list/ContactList.component';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import ConfirmDelete from './components/confirmation/deleteModal';

import './App.css';

const styles = {
  appInner: {
    display: 'flex',
  },
  side1: {
    flex: 1
  },
  side2: {
    flex: 2
  }
}

const App = ({currentUser, isModal, isDeleteModal}) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async(user) => {
      if(!user) currentUser(null);
      currentUser(user)
    })
  })

  return (
    <div className="App">
      {isModal ? < Modal /> : null}
      {isDeleteModal ? <ConfirmDelete /> : null}
      <Navigation />
      <div className="app-container">
        <div style={styles.appInner} className="app-inner">
          <div style={styles.side1} className="app-side-1">
            <AddContact />
          </div>
          <div style={styles.side2} className="app-side-2">
            <ContactList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user.user,
  isModal: state.contact.openModal,
  modalValue: state.contact.contactValue,
  isDeleteModal: state.contact.openDeleteModal
})

const mapDispatchToProps = dispatch => ({
  currentUser: (user) => dispatch(currentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
