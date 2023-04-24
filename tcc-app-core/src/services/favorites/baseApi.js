import axios from 'axios';

const baseApi = axios.create({
    baseURL: 'https://tcc-app-favorites-backend.herokuapp.com'
});

export { baseApi };