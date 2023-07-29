import axios from "axios";

export const login = (email, password) => {
    return axios.post('/api/v1/login', { username: email, password });
}
