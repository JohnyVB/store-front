import axios from 'axios';

const mainAxios = axios.create({
    baseURL: process.env.REACT_APP_STORE_API_URL,
});

export default mainAxios;