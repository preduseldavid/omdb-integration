import axios from 'axios';

const API_URL = 'http://localhost:80/api';
const API_KEY = 'U0LJZhuIGR11Zk3hEw7L9vGFI4Xs0qyCEKqsFxiGCyXjz8wpy2bFH0U2p3hMI9CRUOAJtwomGLVmMM62QQsmPBKCjmMXtjpqn8rCW6fCtKdMVr9vB72KsluvoyGLGHuo';

const HEADERS = {
    'X-API-KEY': API_KEY
};

export const getMovies = async (page = 1) => {
    let params = {
        'page': page
    };
    const response = await axios.get(`${API_URL}/movies`, {params: params, headers: HEADERS});
    return response.data;
};

export const getMovie = async (id) => {
    const response = await axios.get(`${API_URL}/movies/${id}`, {headers: HEADERS});
    return response.data;
};

export const createMovie = async (data) => {
    const response = await axios.post(`${API_URL}/movies`, data, {headers: HEADERS});
    return response.data;
};

export const updateMovie = async (id, data) => {
    const response = await axios.put(`${API_URL}/movies/${id}`, data, {headers: HEADERS});
    return response.data;
};

export const deleteMovie = async (id) => {
    const response = await axios.delete(`${API_URL}/movies/${id}`, {headers: HEADERS});
    return response.data;
};
