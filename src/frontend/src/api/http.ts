import axios from 'axios';

const http = (
    axios.create({
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
)

const isDebug = import.meta.env.VITE_DEBUG === 'true';

const API_PROTOCOL = isDebug ? 'http' : 'https'
const API_DOMAIN = isDebug ? 'localhost:8000' : 'api-jenny-cannabis.blame-nati.com'

export const API_URL = `${API_PROTOCOL}://${API_DOMAIN}`;

export default http;