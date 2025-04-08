import React from 'react';

const CreateThreadForm = ({ handleSubmit, handleBack, title, setTitle }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Thread title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      />
      <div className="flex justify-center gap-4 mt-4">
        <button
          type="submit"
          className="btn-primary cursor-pointer"
        >
          Create
        </button>
        <button
          type="button"
          onClick={handleBack}
          className="btn-secondary cursor-pointer"
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default CreateThreadForm;
