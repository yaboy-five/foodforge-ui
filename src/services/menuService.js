import axios from "axios";

const baseURL = process.env.BASE_URL || process.env.REACT_APP_BASE_URL; 

const API_URL = "http://localhost:3000/menu";

// Get all menu items
export const getMenu = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Get one menu item
export const getMenuItem = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// Add menu item
export const addMenuItem = async (item) => {
    const response = await axios.post(API_URL, item);
    return response.data;
};

// Update menu item
export const updateMenuItem = async (id, item) => {
    const response = await axios.put(`${API_URL}/${id}`, item);
    return response.data;
};

// Delete menu item
export const deleteMenuItem = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export const browseMenu = async () => {
    const response = await axios.get(`${baseURL}/recipes`);
    return response.data;
};