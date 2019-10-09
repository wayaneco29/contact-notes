import React,{ useEffect} from 'react';
import {connect} from 'react-redux';
import {getAllContacts} from '../../firebase/firebase';

import {getContacts} from '../../redux/actions/contact/Contact.actions';

import './contact-list.styles.scss';

const ContactList = ({user,contacts, getContacts}) => {

    const sample = async() => {
        if(user) {
            const data = await getAllContacts(user.uid)
            getContacts(data)
            return data
        }
    }

    useEffect(() => {
        sample()
    }, [user])

    return (
        <div id="contact-list">
            <div className="container-fluid">
                <div className="contact-inner">
                    <div className="contact-headers">
                        <p className="headers headers-email">Email</p>
                        <p className="headers headers-name">Name</p>
                        <p className="headers headers-contact">Contact</p>
                    </div>
                    {
                        contacts && contacts.length > 0 ? 
                        contacts.map((value, index) => (
                            <div className="contact-content" key={index}>
                                <p className="content content-email">{value.email}</p>
                                <p className="content content-name">{value.name}</p>
                                <p className="content content-contact">{value.contact}</p>
                            </div>
                        ))
                        : 
                        <div className="contact-content">
                            <p className="content" style={{width: '100%'}}>NO CONTACTS ..</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user,
    contacts: state.contact.contacts
})

const mapDispatchToProps = dispatch => ({
    getContacts: (data) => dispatch(getContacts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);