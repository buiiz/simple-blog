import { ThunkAction } from 'redux-thunk';

import { fetchAllPosts, fetchPost, pushPost } from '../../utils/api';
import * as types from './types';

export const getPostsStartedAction = (): types.GetPostsStartedAction => {
  return { type: types.GET_POSTS_STARTED, payload: null };
};
export const getPostsSuccessAction = (payload: PostType[]): types.GetPostsSuccessAction => {
  return { type: types.GET_POSTS_SUCCESS, payload };
};

export const getPostStartedAction = (): types.GetPostStartedAction => {
  return { type: types.GET_POST_STARTED, payload: null };
};
export const getPostSuccessAction = (payload: PostType): types.GetPostSuccessAction => {
  return { type: types.GET_POST_SUCCESS, payload };
};

export const createPostStartedAction = (): types.CreatePostStartedAction => {
  return { type: types.CREATE_NEW_POST_STARTED };
};
export const createPostSuccessAction = (payload: PostType): types.CreatePostSuccessAction => {
  return { type: types.CREATE_NEW_POST_SUCCESS, payload };
};

export const getPosts = (): ThunkAction<void, PostsState, unknown, types.ActionTypes> => {
  return async dispatch => {
    dispatch(getPostsStartedAction());
    const data = await fetchAllPosts();
    dispatch(getPostsSuccessAction(data));
  };
};

export const getPost = (id: string): ThunkAction<void, PostsState, unknown, types.ActionTypes> => {
  return async dispatch => {
    dispatch(getPostStartedAction());
    const data = await fetchPost(id);
    dispatch(getPostSuccessAction(data));
  };
};

export const createPost = (title: string, body: string): ThunkAction<void, PostsState, unknown, types.ActionTypes> => {
  return async dispatch => {
    dispatch(createPostStartedAction());
    const data = await pushPost({ title, body }); //! title ,body
    dispatch(createPostSuccessAction(data));
  };
};
