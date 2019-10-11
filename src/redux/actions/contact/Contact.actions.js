export const getContacts = action => ({
    type: "GET_CONTACTS",
    payload: action
})

export const selectOneContact = action => ({
    type: "UPDATE_CONTACTS",
    payload: action
})

export const closeModal = () => ({
    type: "CLOSE_MODAL"
})

export const openDeleteModal = (id) => ({
    type: "OPEN_DELETE_MODAL",
    payload: id
})

export const closeDeleteModal = () => ({
    type: "CLOSE_DELETE_MODAL"
})