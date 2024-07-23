import axios from 'axios';
//Base URL for the API
const API_URL = 'http://localhost:5000/api';

// to register a new user
export const registerUser=async (userData) =>{
    try {
        const response=await axios.post(`${API_URL}/users/register`, userData);
        return response.data;
        
    } catch (error) {
        throw error.response.data;
        
    }
}