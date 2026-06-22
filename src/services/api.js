import axios from "axios";
import api from "../services/api";

const baseURL = process.env.BASE_URL

export default axios.create({
    baseURL
});

const response = await api.get("/menu/browse");