import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import PropTypes from "prop-types";

const CommentInput = ({ onCommentSubmit }) => {
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // Added loading state
  const axiosPublic = useAxiosPublic();

  const handleComment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;

    if (!comment.trim()) {
      // Optional: Add validation for empty comments
      return;
    }

    try {
      setIsLoading(true);  // Set loading state
      const response = await axiosPublic.post("/comment", { comment });
      onCommentSubmit(response.data);
      setNewComment('');
    } catch (error) {
      console.error("Error submitting comment:", error);
      // Optional: Provide user-friendly error feedback
    } finally {
      setIsLoading(false);  // Reset loading state
    }
  };

  return (
    <form onSubmit={handleComment}>
      <div className="flex justify-start items-center gap-4 my-7">
        <input
          type="text"
          placeholder="Comment"
          name="comment"
          className="input input-bordered input-md w-full max-w-xs"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit" className="btn btn-info" disabled={isLoading}>
          {isLoading ? 'Posting...' : 'Post'}
        </button>
      </div>
    </form>
  );
};

CommentInput.propTypes = {
  onCommentSubmit: PropTypes.func,
};

export default CommentInput;
