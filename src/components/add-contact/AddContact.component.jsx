import React from 'react';
import {connect} from 'react-redux';

import useForm from 'react-hook-form';
import {addContactToFirestore,getAllContacts} from '../../firebase/firebase';
import {getContacts} from '../../redux/actions/contact/Contact.actions';

import Spinner from '../spinner/spinner';

import './add-contact.styles.scss';

const AddContact = ({user, getContacts}) => {
    const { register, handleSubmit,errors, reset} = useForm();
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
    const onSubmit = async (e) => {
        setLoading(true)
        await addContactToFirestore(user.uid, values)
        const data = await getAllContacts(user.uid)
        getContacts(data)
        reset()
        setLoading(false)
    }

    return (
        <div id="add-contact">
            <div className="container-fluid">
                <p className="contact-header">Create Contact here... </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        {errors.email ? <label htmlFor="#email">&times;</label> : null}
                        <input type="text" onChange={handleChange} name="email" id="email" className="input-field" placeholder="Enter Email ..." 
                            style={{border: errors.email ? "1px solid red" : ""}}
                            disabled={user ? false : true} ref={register({
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}/>
                    </div>
                    <div className="form-group">
                        {errors.name ? <label htmlFor="#name">&times;</label> : null}
                        <input type="text" onChange={handleChange} name="name" id="name" className="input-field"  placeholder="Enter Name ..." 
                            style={{border: errors.name ? "1px solid red" : ""}}
                            disabled={user ? false : true} ref={register({required: true})}/>
                    </div>
                    <div className="form-group">
                        {errors.contact ? <label htmlFor="#phone">&times;</label> :null}
                        <input type="text" onChange={handleChange} name="contact" id="contact" className="input-field" placeholder="Enter Contact ...." 
                        style={{border: errors.contact ? "1px solid red" : ""}}
                        disabled={user ? false : true} ref={register({required: true})}/>
                    </div>
                    {
                        loading ? 
                        (
                        <button className="btn-contact">
                            <Spinner size={15}/> ADDING...
                        </button>
                        )
                         :
                        (
                        <button 
                            className="btn-contact" 
                            style={{ background: user ? "" : "#c1c0bd", color: user ? "" : "#0006", cursor: user ? "" : "auto"}} 
                            type="submit" 
                            disabled={user ? false : true}>
                            {user ? "ADD CONTACT" : " DISABLED"}
                        </button>
                        )
                        
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