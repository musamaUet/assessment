import axios from "axios";

const client = axios.create({
    // baseURL: process.env.VITE_PUBLIC_API_URL ?? 'https://api.teemo.ai/api',
    baseURL: 'http://localhost:3017/api',
    headers: {
        "Content-Type": "application/json",
    },
});

export default client;
