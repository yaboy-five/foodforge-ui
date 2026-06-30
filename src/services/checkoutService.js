import axios from "axios";

const API_URL = process.env.API_URL; 

// Review current order
export const reviewOrder = async () => {
    const response = await axios.get(`${API_URL}/review`);
    return response.data;
};

// Process checkout
export const processCheckout = async () => {
    const response = await axios.post(`${API_URL}/process`);
    return response.data;
};

// Process payment
export const processPayment = async () => {
    const response = await axios.post(`${API_URL}/payment`);
    return response.data;
};

// Confirm order
export const orderConfirmation = async () => {
    const response = await axios.post(`${API_URL}/confirmation`);
    return response.data;
};

// Cancel checkout
export const cancelCheckout = async () => {
    const response = await axios.delete(`${API_URL}/cancel`);
    return response.data;
};
