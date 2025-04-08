const ThreadListItem = ({ thread, onClick }) => {
    return (
      <li
        onClick={() => onClick(thread.id, thread.title)}
        className="p-2 cursor-pointer hover:bg-gray-100 rounded"
      >
        <p className="text-gray-700 text-xl break-words">#{thread.title}</p>
      </li>
    );
  };
  
  export default ThreadListItem;
  