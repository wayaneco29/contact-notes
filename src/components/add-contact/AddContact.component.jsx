import React from 'react';
import {connect} from 'react-redux';

import useForm from 'react-hook-form';
import {addContactToFirestore,getAllContacts} from '../../firebase/firebase';
import {getContacts} from '../../redux/actions/contact/Contact.actions';

import Spinner from '../spinner/spinner';

import './add-contact.styles.scss';

const AddContact = ({user, getContacts}) => {
    const { register, handleSubmit,errors} = useForm();
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

    const onSubmit = async (e) => {
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        {errors.email ? <label htmlFor="#email">&#x2BBE;</label> : null}
                        <input type="text" onChange={handleChange} name="email" id="email" className="input-field" placeholder="Enter Email ..." value={values.email} disabled={user ? false : true} ref={register({required: true})}/>
                    </div>
                    <div className="form-group">
                        {errors.name ? <label htmlFor="#name">&#x2BBE;</label> : null}
                        <input type="text" onChange={handleChange} name="name" id="name" className="input-field"  placeholder="Enter Name ..." value={values.name} disabled={user ? false : true} ref={register({required: true})}/>
                    </div>
                    <div className="form-group">
                        {errors.contact ? <label htmlFor="#phone">&#x2BBE;</label> :null}
                        <input type="text" onChange={handleChange} name="contact" id="contact" className="input-field" placeholder="Enter Contact ...." value={values.contact} disabled={user ? false : true} ref={register({required: true})}/>
                    </div>
                    {
                        loading ? 
                        (<button className="btn-contact" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Spinner size={15}/> ADDING...
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