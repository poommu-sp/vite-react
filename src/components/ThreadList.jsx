import ThreadListItem from "./ThreadListItem";

const ThreadList = ({ threads, offset, onPrev, onNext, onItemClick }) => {
  return (
    <>
      {!Array.isArray(threads) || threads.length === 0 ? (
        <p>No Threads available.</p>
      ) : (
        <ul className="text-left">
          {threads.map((thread) => (
            <ThreadListItem
              key={thread.id}
              thread={thread}
              onClick={onItemClick}
            />
          ))}
        </ul>
      )}

      <div className="flex justify-center gap-4 mt-4">
        <button
          className="bg-sky-500 px-4 py-2 text-white rounded-full disabled:opacity-50"
          disabled={offset === 0}
          onClick={onPrev}
        >
          Prev Page
        </button>
        <button
          className="bg-sky-500 px-4 py-2 text-white rounded-full"
          onClick={onNext}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default ThreadList;
