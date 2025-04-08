export const createPost = async (threadId, post) => {
  const response = await fetch(
    `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: post,
      }),
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.ErrorMessageEN || "Failed to create thread");
  }
  return response.json();
};

export const getPosts = async (threadId, offset = 0) => {
  const res = await fetch(
    `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts?offset=${offset}`
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.ErrorMessageEN);
  }

  return res.json();
};