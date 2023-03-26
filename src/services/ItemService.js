import axios from 'axios'

const apiClient = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://jsondata-4tjm.onrender.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    getItems() {
        return apiClient.get('/list')
    },
    getIActor() {
        return apiClient.get('/user')
    },
}
