import React from 'react'; 
import { connect } from 'react-redux'; 

import { closeDeleteModal,getContacts } from '../../redux/actions/contact/Contact.actions';
import {deleteContacts,getAllContacts} from '../../firebase/firebase';

import './delete.styles.scss';

const ConfirmDelete = ({getContacts, userId, closeDeleteModal, contactId}) => {
    const [loading, setLoading] = React.useState(false);

    const deleteContact = async () => {
        setLoading(true);
        await deleteContacts(userId, contactId);
        const data = await getAllContacts(userId);
        getContacts(data)
        closeDeleteModal();
        setLoading(false)
    }

    return (
        <div id="delete">
            <div className="delete-inner">
                <div className="delete-box">
                    <div className="delete-title">
                        Delete Confirmation
                    </div>
                    <div className="delete-content">
                        Are you sure to delete ?
                    </div>
                    <div className="delete-actions">
                        <button className="delete-btn" onClick={() => closeDeleteModal()}>Cancel</button>
                        <button className="delete-btn" onClick={deleteContact}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    userId: state.user.user.uid,
    contactId: state.contact.contactId
})

const mapDispatchToProps = dispatch => ({
    getContacts: value => dispatch(getContacts(value)),
    closeDeleteModal: () => dispatch(closeDeleteModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDelete);