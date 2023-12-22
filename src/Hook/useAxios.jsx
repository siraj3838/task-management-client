import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-management-server-five-delta.vercel.app'
})

const useAxios = () => {
    return axiosPublic;
};

export default useAxios;