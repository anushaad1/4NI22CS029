const BASE_URL = 'http://20.244.56.144/evaluation-service';

export const fetchCommentsForPost = async (postId: number) => {
  const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  return res.json();
};

export const fetchAllPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
};

export const fetchAllUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
};