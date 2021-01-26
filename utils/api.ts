import axios from 'axios';

const api = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/',
});

export const fetchAllPosts = async (): Promise<PostType[]> => {
  const { data } = await api.get('posts/');
  return data;
};

export const fetchPost = async (id: string | string[]): Promise<PostType> => {
  const { data } = await api.get(`posts/${id}?_embed=comments`);
  return data;
};

export const pushPost = async (post: PostType): Promise<PostType> => {
  const { data } = await api.post('posts/', post);
  return data;
};

export const deletePostReq = async (id: string[]): Promise<void> => {
  const { data } = await api.delete(`posts/${id}`);
  return data;
};

//! createComment
//! deleteComment
