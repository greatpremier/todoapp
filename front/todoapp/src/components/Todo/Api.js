import axios from "axios"

const API_URL = 'http://127.0.0.1:8000/main/api/';

const getHeaders = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
});

export const getTasks = async () => axios.get(`${API_URL}tasks`, getHeaders());

export const createTask = async (taskData) => axios.post(`${API_URL}task/add`, taskData, getHeaders()) //fetch(`${API_URL}tasks/add`,taskData, {method: 'POST'})

export const createCategory = (categoryData) => axios.post(`${API_URL}category/add/`, categoryData, getHeaders)

export const getToken = async () => console.log(localStorage.getItem("access_token"))

const Api = () => {
    return (
        <div>
            {getToken()}
        </div>
    )
}

export default Api;