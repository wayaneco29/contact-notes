import React from 'react';
import {connect} from 'react-redux';

import {addContactToFirestore,getAllContacts} from '../../firebase/firebase';
import {getContacts} from '../../redux/actions/contact/Contact.actions';

import Spinner from '../spinner/spinner';

import './add-contact.styles.scss';

const AddContact = ({user, getContacts}) => {
    const [values, setValues] = React.useState({
        email: '',
        name:'',
        contact: ''
    })
    const [loading, setLoading] = React.useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }

    const validateEmail = (email) => {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(String(email).toLowerCase());
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validateEmail(values.email)) {
            console.log("Email Validated")
        } else {
            console.log("Invalid Email !")
            return;
        }
 
        if(values.name === "" || values.contact === "") {
            return console.log("EMPTY FIELDS")
        }
        setLoading(true)
        await addContactToFirestore(user.uid, values)
        const data = await getAllContacts(user.uid)
        getContacts(data)
        setValues({values, name: "", email: "", contact: ""})
        setLoading(false)
    }

    return (
        <div id="add-contact">
            <div className="container-fluid">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="#email">Email:</label>
                        <input type="text" onChange={handleChange} name="email" id="email" className="input-field" placeholder="Enter Email ..." value={values.email} disabled={user ? false : true}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="#name">Name:</label>
                        <input type="text" onChange={handleChange} name="name" id="name" className="input-field"  placeholder="Enter Name ..." value={values.name} disabled={user ? false : true}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="#phone">Contact:</label>
                        <input type="text" onChange={handleChange} name="contact" id="contact" className="input-field" placeholder="Enter Contact ...." value={values.contact} disabled={user ? false : true}/>
                    </div>
                    {
                        loading ? 
                        (<button className="btn-contact" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Spinner /> ADDING
                    </button>) :
                        (<button className="btn-contact" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} type="submit" disabled={user ? false : true}> ADD CONTACT</button>)
                        
                    }
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user
})

const mapDispatchToProps = dispatch => ({
    getContacts: data => dispatch(getContacts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);