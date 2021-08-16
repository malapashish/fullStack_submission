import axios from "axios";
const baseUrl = "http://localhost:3001/api/persons";

const getContacts = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createContact = (newContact) => {
  const request = axios.post(baseUrl, newContact);
  return request.then((response) => response.data);
};

const deleteContact = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const updateContact = (id, newContactObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newContactObject);
  return request.then((response) => response.data);
};

const contactServices = {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
};

export default contactServices;
