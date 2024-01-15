

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CommentBox from "../CommentBox/CommentBox";
import CommentInput from "../CommentInput/CommentInput";

const CommentPage = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  const { data: comments} = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      try {
        const response = await axiosPublic.get("/comment");
        return response.data.comments;
      } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
      }
    },
  });

  const handleCommentSubmit = async (newComment) => {
    try {
  
      await axiosPublic.post("/comment", { comment: newComment.comment });
      queryClient.invalidateQueries(["comments"]);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };
  
  
  
  
  


  return (
    <div>

    <CommentInput onCommentSubmit={handleCommentSubmit} />
    <CommentBox comments={comments} />
  </div>
  );
};

export default CommentPage;