import axios from "axios";

const axiosPublic = axios.create({

baseURL:'https://the-final-project-server-bt878edsc-maliksakin53gmailcom.vercel.app'
// baseURL:'http://localhost:5000'

})




const useAxiosPublic = () => {
    return  axiosPublic;
};

export default useAxiosPublic;



