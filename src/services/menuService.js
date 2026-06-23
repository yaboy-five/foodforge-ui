import axios from "axios";

const baseURL = process.env.BASE_URL || process.env.REACT_APP_BASE_URL; 

export const browseMenu = async () => {
    const response = await axios.get(`${baseURL}/recipes`);
    return response.data;
};