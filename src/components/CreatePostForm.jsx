import LoadingComponent from "./LoadingComponent";

const CreatePostForm = ({
  newPost,
  setNewPost,
  onSubmit,
  loading,
}) => {
  return (
    <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-center">Create a Post</h3>
      {loading ? (
        <LoadingComponent text="Posting..." />
      ) : (
        <form onSubmit={onSubmit}>
          <textarea
            className="w-full border p-3 rounded mb-4 resize-none"
            rows={4}
            placeholder="Write your post here..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-full"
          >
            Create Post
          </button>
        </form>
      )}
    </div>
  );
};

export default CreatePostForm;
