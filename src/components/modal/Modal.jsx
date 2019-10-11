import React from 'react';
import { connect } from 'react-redux';
import useForm from 'react-hook-form';

import {closeModal, getContacts} from '../../redux/actions/contact/Contact.actions';
import { updateContacts, getAllContacts } from '../../firebase/firebase';

import Spinner from '../spinner/spinner';

import './modal.styles.scss';

const Modal = ({selectedValue, dispatch,userId,getContacts, closeModal}) => {
    const { register, handleSubmit,errors} = useForm();
    const [loading, setLoading] = React.useState(false);
    const [values, setValue] = React.useState({
        email: selectedValue.email,
        name: selectedValue.name,
        contact: selectedValue.contact
    })
    
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setValue({ ...values, [name]: value})
    }

    const toSubmit = async (e) => {
        try {
            setLoading(true)
            await updateContacts(userId,selectedValue.id, values);
            const data = await getAllContacts(userId)
            getContacts(data)
            setLoading(false)
            closeModal();
        } catch(e) {
            throw new Error(e)
        }
    }

    return (
        <div id="modal">
            <div className="modal-inner">
                <div className="modal-box">
                    <div className="modal-title">UPDATE CONTACT</div>
                    <div className="modal-content">
                        <form onSubmit={handleSubmit(toSubmit)}>
                            <div className="form-group">
                                {errors.email ? <label htmlFor="#email">&#x2BBE;</label> : null}
                                <input type="text" name="email" onChange={handleChange} id="email" style={{border: errors.email ? "1px solid red" : null}} className="input-field" placeholder="Enter Email ..." defaultValue={selectedValue.email} ref={register({
                                    required: true,
                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })}/>
                            </div>
                            <div className="form-group">
                                {errors.name ? <label htmlFor="#email">&#x2BBE;</label> : null}
                                <input type="text" name="name" style={{border: errors.name ? "1px solid red" : null}} onChange={handleChange} id="name" className="input-field"  placeholder="Enter Name ..." defaultValue={selectedValue.name} ref={register({required: true})}/>
                            </div>
                            <div className="form-group">
                                {errors.contact ? <label htmlFor="#email">&#x2BBE;</label> : null}
                                <input type="text" name="contact" style={{border: errors.contact ? "1px solid red" : null}} onChange={handleChange} id="contact" className="input-field" placeholder="Enter Contact ...." defaultValue={selectedValue.contact} ref={register({required: true})}/>
                            </div> 
                            <div className="modal-actions">
                                <button className="modal-btn-actions" type="btn" onClick={() => closeModal()}>CANCEL</button>
                                <button className="modal-btn-actions" type="submit" disable={loading.toString()} style={{cursor: loading ? "progress" : "pointer"}}>{loading ? <Spinner size={15} /> : null} UPDATE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    userId: state.user.user.uid,
    selectedValue: state.contact.contactValue
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    getContacts: item => dispatch(getContacts(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);