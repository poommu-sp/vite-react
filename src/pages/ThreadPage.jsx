import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { createPost, getPosts } from "../services/post";
import PostList from "../components/PostList";
import CreatePostForm from "../components/CreatePostForm";

const ThreadPage = () => {
  const { threadId } = useParams();
  const location = useLocation();
  const { title } = location.state;

  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [newPost, setNewPost] = useState("");
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(false);

  const fetchPosts = async () => {
    setLoadingPost(true);
    try {
      const data = await getPosts(threadId, offset);
      setPosts(data.posts);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoadingPost(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [offset]);

  const handlePrevPage = () => {
    if (offset >= 10) setOffset((prev) => prev - 10);
  };

  const handleNextPage = () => {
    setOffset((prev) => prev + 10);
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setLoadingCreate(true);
    try {
      await createPost(threadId, newPost);
      await fetchPosts();
      setNewPost("");
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoadingCreate(false);
    }
  };

  return (
    <div className="pt-20 px-4 sm:py-24 md:py-28 lg:py-32 bg-gray-100 min-h-screen flex flex-col lg:flex-row justify-center items-start gap-8">
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          #{title}
        </h2>
        <PostList
          posts={posts}
          loading={loadingPost}
          offset={offset}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
        />
      </div>
      <CreatePostForm
        newPost={newPost}
        setNewPost={setNewPost}
        onSubmit={handleCreatePost}
        loading={loadingCreate}
      />
    </div>
  );
};

export default ThreadPage;
