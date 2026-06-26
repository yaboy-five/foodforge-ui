import axios from "axios";

const API_URL = "http://localhost:3000/menu"; // reuse menu for featured items

// top 3 items
export const getFeaturedItems = async () => {
    const res = await axios.get(API_URL);
    return res.data.slice(0, 3);
};