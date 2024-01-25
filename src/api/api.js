import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65afa59b2f26c3f2139b5b13.mockapi.io/phonebook',
});

export const getContacts = async () => {
  const response = await instance.get('/contacts');
  return response.data;
};
export const setContact = async data => {
  const response = await instance.post('/contacts', data);
  return response.data;
};
export const deleteContact = async id => {
  const response = await instance.delete(`/contacts/${id}`);
  return response.data;
};
