import axios from "axios";

const API_URL = process.env.API_URL; 

// get status
export const getStatus = async () => {
    const res = await axios.get(`${API_URL}`);
    return res.data;
};

// update status manually
export const updateStatus = async (status) => {
    const res = await axios.put(`${API_URL}/update`, { status });
    return res.data;
};

// next step in flow
export const nextStatus = async () => {
    const res = await axios.post(`${API_URL}/next`);
    return res.data;
};

// reset
export const resetStatus = async () => {
    const res = await axios.post(`${API_URL}/reset`);
    return res.data;
};