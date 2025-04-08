import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateThreadForm from "../components/CreateThreadForm";
import { createThread } from "../services/thread";

const CreateThreads = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createThread(title);
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="pt-20 sm:py-24 md:py-28 lg:py-32 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Create Thread</h2>
        <CreateThreadForm
          handleSubmit={handleSubmit}
          handleBack={handleBack}
          title={title}
          setTitle={setTitle}
        />
      </div>
    </div>
  );
};

export default CreateThreads;
