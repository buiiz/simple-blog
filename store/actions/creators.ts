import * as types from './types';

export const getPostsStartedAction = (): types.GetPostsStartedAction => {
  return { type: types.GET_POSTS_STARTED };
};
export const getPostsSuccessAction = (payload: PostsState): types.GetPostsSuccessAction => {
  return { type: types.GET_POSTS_SUCCESS, payload };
};

export const createPostStartedAction = (): types.CreatePostStartedAction => {
  return { type: types.CREATE_NEW_POST_STARTED };
};
export const createPostSuccessAction = (payload: PostsState): types.CreatePostSuccessAction => {
  return { type: types.CREATE_NEW_POST_SUCCESS, payload };
};
