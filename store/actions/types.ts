import { HYDRATE } from 'next-redux-wrapper';

export const GET_POSTS_STARTED = 'GET_POSTS_STARTED';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';

export const GET_POST_STARTED = 'GET_POST_STARTED';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';

export const CREATE_NEW_POST_STARTED = 'CREATE_NEW_POST_STARTED';
export const CREATE_NEW_POST_SUCCESS = 'CREATE_NEW_POST_SUCCESS';

export interface HydrateAction {
  type: typeof HYDRATE;
  payload: any;
}
export interface GetPostsStartedAction {
  type: typeof GET_POSTS_STARTED;
  payload?: boolean;
}
export interface GetPostsSuccessAction {
  type: typeof GET_POSTS_SUCCESS;
  payload: PostType[];
}

export interface GetPostStartedAction {
  type: typeof GET_POST_STARTED;
  payload?: boolean;
}
export interface GetPostSuccessAction {
  type: typeof GET_POST_SUCCESS;
  payload: PostType;
}

export interface CreatePostStartedAction {
  type: typeof CREATE_NEW_POST_STARTED;
  payload?: boolean;
}
export interface CreatePostSuccessAction {
  type: typeof CREATE_NEW_POST_SUCCESS;
  payload: PostType;
}

export type ActionTypes =
  | HydrateAction
  | GetPostStartedAction
  | GetPostSuccessAction
  | GetPostsStartedAction
  | GetPostsSuccessAction
  | CreatePostStartedAction
  | CreatePostSuccessAction;
