import axios from "axios";
import api from "../services/api";

export default axios.create({
    baseURL: "https://dummyjson.com"
});

const response = await api.get("/menu/browse");