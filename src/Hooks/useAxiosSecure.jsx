import { useNavigate } from "react-router-dom";
import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://the-final-project-server-bt878edsc-maliksakin53gmailcom.vercel.app'
    // baseURL:'http://localhost:5000'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();


    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        console.log('Retrieved token:', token); 
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            console.log('forbidden access', 'unauthorize access')
        }
        return Promise.reject(error);
    });

    return { axiosSecure, navigate }; 
};

export default useAxiosSecure;
