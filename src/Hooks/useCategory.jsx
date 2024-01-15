import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";



const useCategory = () => {

const AxiosPublic = useAxiosPublic()
const [news, setNews] = useState([])
const [loading, setLoading] = useState(true)



const handlePremium = async () => {
    try {
      const res = await AxiosPublic.get('/add');
      console.log(res.data); 
      setNews(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching premium data:', error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    handlePremium(); 
  }, []);



    return [news, loading]
};

export default useCategory;