import { HYDRATE } from 'next-redux-wrapper';

import * as types from '../actions/types';

const initialState: PostsState = {
  posts: [],
  loading: false,
};

const mainReducer = (state = initialState, action: types.ActionTypes): PostsState => {
  switch (action.type) {
    case types.GET_POSTS_STARTED:
      return { ...state, loading: !state.posts };
    case types.GET_POSTS_SUCCESS:
      return { ...state, posts: [...action.payload], loading: false };

    case types.CREATE_NEW_POST_STARTED:
      return { ...state, loading: true };
    case types.CREATE_NEW_POST_SUCCESS:
      return { ...state, posts: [...state.posts, action.payload], loading: false };

    case HYDRATE:
      return { ...state, ...action.payload.posts };
    default:
      return state;
  }
};

export default mainReducer;
