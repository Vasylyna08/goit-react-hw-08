// import { instance } from '../axios';

import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const requestSignupUser = async newUser => {
  const { data } = await instance.post('/users/signup', newUser);
  setAuthHeader(data.token);
  console.log(data);
  return data;
};

export const requestLoginUser = async userInfo => {
  const { data } = await instance.post('/users/login', userInfo);
  setAuthHeader(data.token);
  return data;
};

export const requestLogOutUser = async userInfo => {
  await instance.post('/users/logOut', userInfo);
};

export const requestRefreshUser = async () => {
  const { data } = await instance.get('/users/current');
  return data;
};

export const getContacts = async () => {
  const data = await instance.get('/contacts');
  return data;
};

export const removeContact = async id => {
  const data = await instance.delete(`/contacts/${id}`);
  return data;
};

export const createContact = async contact => {
  const data = await instance.post('/contacts', contact);
  return data;
};
