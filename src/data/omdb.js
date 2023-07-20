import axios from 'axios';

const API_URL = 'https://www.omdbapi.com';
const API_KEY = '720c3666';

export const getMovies = async () => {
    let params = {
        'apikey': API_KEY
    };
    const response = await axios.get(`${API_URL}`, {params: params});
    return response.data;
};

export const getMovie = async (id) => {
    let params = {
        'apikey': API_KEY,
        'i': id
    };
    const response = await axios.get(`${API_URL}`, {params: params});
    return response.data;
};

export const searchMovie = async (search) => {
    let params = {
        'apikey': API_KEY,
        't': search
    };
    const response = await axios.get(`${API_URL}`, {params: params});
    return response.data;
};

