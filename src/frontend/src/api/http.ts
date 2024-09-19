import axios from 'axios';

const http = (
    axios.create({
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
)

const isDebug = true;

const API_PROTOCOL = isDebug ? 'http' : 'https'
const API_DOMAIN = isDebug ? 'localhost:8000' : 'api.example.com'

export const API_URL = `${API_PROTOCOL}://${API_DOMAIN}`;

export default http;