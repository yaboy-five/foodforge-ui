import axios from "axios";

const API_URL = process.env.API_URL;

export const viewCart = async () => {
    const res = await axios.get(`${API_URL}`);
    return res.data;
};

export const addToCart = async (item) => {
    const res = await axios.post(`${API_URL}/add`, item);
    return res.data;
};

export const updateCartItem = async (id, quantity) => {
    const res = await axios.put(`${API_URL}/update/${id}`, {
        quantity
    });
    return res.data;
};

export const removeFromCart = async (id) => {
    const res = await axios.delete(`${API_URL}/remove/${id}`);
    return res.data;
};

export const clearCart = async () => {
    const res = await axios.delete(`${API_URL}/clear`);
    return res.data;
};
