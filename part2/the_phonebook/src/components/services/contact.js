import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getContacts = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const createContact = newContact => {
    const request = axios.post(baseUrl , newContact);
    return request.then(response => response.data);
}


const contactServices = {
    getContacts : getContacts ,
    createContact : createContact
}

export default contactServices;