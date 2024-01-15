import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useCart = () => {
  const axiosPublic = useAxiosPublic();
  const {user} = useAuth();
  const userEmail = user?.email;
  const {refetch, data : card = []} = useQuery({
        queryKey :[ 'card',userEmail],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/users?email=${userEmail}`)
            return res.data;
        }
  })



    return [card, refetch]
};

export default useCart;