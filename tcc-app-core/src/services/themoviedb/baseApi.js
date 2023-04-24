import axios from 'axios';

const baseApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export { baseApi };