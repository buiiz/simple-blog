export const GET_POSTS_STARTED = 'GET_POSTS_STARTED';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';

export const CREATE_NEW_POST_STARTED = 'CREATE_NEW_POST_STARTED';
export const CREATE_NEW_POST_SUCCESS = 'CREATE_NEW_POST_SUCCESS';

export interface GetPostsStartedAction {
  type: typeof GET_POSTS_STARTED;
  payload?: boolean;
}
export interface GetPostsSuccessAction {
  type: typeof GET_POSTS_SUCCESS;
  payload: PostsState;
}

export interface CreatePostStartedAction {
  type: typeof CREATE_NEW_POST_STARTED;
  payload?: boolean;
}
export interface CreatePostSuccessAction {
  type: typeof CREATE_NEW_POST_SUCCESS;
  payload: PostsState;
}
