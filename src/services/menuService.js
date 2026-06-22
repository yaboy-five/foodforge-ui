import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const browseMenu = async () => {
    const response = await axios.get(`${BASE_URL}/recipes`);
    return response.data;
};