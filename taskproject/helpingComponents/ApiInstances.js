import axios from 'axios';
import Storage from './storage';
// import Storage from './storage';
export const baseUrl = 'https://sakcham.pdttech.in/api';

export const axiosPostData = async (url, formData) => {
  return await axios
    .post(`${baseUrl}/${url}`, formData, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log('err', err);
      return err;
    });
};

export const PostData = async (url, Data) => {
  let token = await Storage.getToken();
  return axios
    .post(`${baseUrl}${url}`, Data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: !!token ? 'Bearer ' + token : '',
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log('error,', error);
    });
};

export const axiosGetData = async (url, formData) => {
  let userProfile = await Storage.getToken();
  return axios
    .get(`${baseUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${userProfile}`
      },
      params: formData,
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};
export const GetData = async url => {
  let response = 'no';
  let userProfile = await Storage.getToken();
  await axios
    .get(`${baseUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${userProfile}`,
      },
    })
    .then(res => {
      response = res;
    })
    .catch(err => {
      console.log(err)
    });

  return response;
};
