import axios from "axios";

const API_URL = process.env.API_URL; 

// top 3 items
export const getFeaturedItems = async () => {
    const res = await axios.get(API_URL);
    return res.data.slice(0, 3);
};