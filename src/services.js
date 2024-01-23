import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://raw.githubusercontent.com/rezendefelipe/vue-ranek/main/ranek-api"
})

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body);
    }
}