import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  createPostStartedAction,
  createPostSuccessAction,
  getPostsStartedAction,
  getPostsSuccessAction,
} from './creators';

export const getPosts = (): ThunkAction<void, PostsState, unknown, Action> => {
  return dispatch => {
    dispatch(getPostsStartedAction());

    axios
      .get('https://simple-blog-api.crew.red/posts')
      .then(response => dispatch(getPostsSuccessAction(response.data)))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error.message));
  };
};

export const createPost = (title, body): ThunkAction<void, PostsState, unknown, Action> => {
  return dispatch => {
    dispatch(createPostStartedAction());

    axios
      .post('https://simple-blog-api.crew.red/posts', {
        title,
        body,
      })
      .then(response => dispatch(createPostSuccessAction(response.data)))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error.message));
  };
};
