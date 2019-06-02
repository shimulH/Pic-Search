import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID dec4e59b1f2f5d80f578430ecbac8581a688922a215b0ddd1b950ae0da38b29f'
    }
})