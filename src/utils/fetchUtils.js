import axios from 'axios';

const ApiService = (token = null) => {
    console.log(`token: ${token.json}`)
    const defaultOptions = {
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    };
    console.log(`token: ${token.json}`)


    return {
        get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
        post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
        put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
        delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
    };
};
export default ApiService;
