export const createThread = async (title) => {
    const response = await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      }
    );
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.ErrorMessageEN || "Failed to create thread");
    }
  
    return response.json();
  };

  export const getThreads = async (offset = 0) => {
    const res = await fetch(
        `https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`
      );
  
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.ErrorMessageEN);
    }
  
    return res.json();
  };