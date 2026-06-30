import axios from "axios";

const API_URL = process.env.API_URL;

export const login = async (username, password) => {

    const response = await axios.post(`${API_URL}/login`, {
        username,
        password
    });

    return response.data;
};

export const register = async (username, password) => {

    const response = await axios.post(`${API_URL}/register`, {
        username,
        password
    });

    return response.data;
};