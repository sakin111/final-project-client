import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useComment = () => {
  const axiosPublic = useAxiosPublic();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    try {
      const response = await axiosPublic.get("/comment");
      console.log(response.data);
      setComments(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []); 

  return { comments, loading};
};

export default useComment;
