import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";
import ThreadList from "../components/ThreadList";
import { getThreads } from "../services/thread";

const ThreadsListPage = () => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  const fetchThreads = async () => {
    setLoading(true);
    try {
      const data = await getThreads(offset);
      setThreads(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, [offset]);

  const handleNextPage = () => setOffset((prev) => prev + 10);
  const handlePrevPage = () => {
    if (offset >= 10) setOffset((prev) => prev - 10);
  };

  const handleCreate = () => {
    navigate("/threads/new");
  };

  const handleThreadClick = (threadId, title) => {
    navigate(`/threads/${threadId}`, { state: { title } });
  };

  return (
    <div className="py-20 sm:py-24 md:py-28 lg:py-32 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-blue-600">掲示板スレッド一覧</h1>
          <button
            onClick={handleCreate}
            className="cursor-pointer ml-2 bg-green-700 text-white hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full p-2.5 text-center inline-flex items-center"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {loading ? (
          <LoadingComponent text="Loading Threads..." />
        ) : (
          <ThreadList
            threads={threads}
            offset={offset}
            onPrev={handlePrevPage}
            onNext={handleNextPage}
            onItemClick={handleThreadClick}
          />
        )}
      </div>
    </div>
  );
};

export default ThreadsListPage;
