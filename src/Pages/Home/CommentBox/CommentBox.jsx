
import PropTypes from 'prop-types';

const CommentBox = ({ comments }) => {
  return (
    <div className="w-auto h-auto border-2 mb-5 p-5 rounded-lg">
      {comments && comments.length > 0 ? (
        comments.map((item, index) => (
          <div key={item._id || index}>
            <div className="card w-56m bg-slate-300 shadow-sm my-5">
              <p className="  text-sm font-serif text-center text-gray-500 my-3 mx-3">
                {item.comment}
              </p>
            </div>

          </div>
        ))
      ) : (
        <p>No comments available.</p>
      )}
    </div>
  );
};

CommentBox.propTypes = {
  comments: PropTypes.array
};

export default CommentBox;

