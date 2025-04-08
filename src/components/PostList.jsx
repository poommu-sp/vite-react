import PostItemComponent from "./PostItemComponent";
import LoadingComponent from "./LoadingComponent";

const PostList = ({ posts, loading, offset, onPrev, onNext }) => {
  if (loading) return <LoadingComponent text="Loading Posts..." />;

  return (
    <>
      {!Array.isArray(posts) || posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available.</p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post) => (
            <PostItemComponent post={post.post} />
          ))}
        </ul>
      )}

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={onPrev}
          disabled={offset === 0}
          className="bg-sky-500 px-4 py-2 text-white rounded-full disabled:opacity-50"
        >
          Prev Page
        </button>
        <button
          onClick={onNext}
          className="bg-sky-500 px-4 py-2 text-white rounded-full"
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default PostList;
