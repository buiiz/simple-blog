import { HYDRATE } from 'next-redux-wrapper';

import * as types from '../actions/types';

const initialState: PostState = {
  id: null,
  title: null,
  body: null,
  comments: [],
  loading: false,
};

const postReducer = (state = initialState, action: types.ActionTypes): PostState => {
  switch (action.type) {
    case types.GET_POST_STARTED:
      return { ...state, loading: true };
    case types.GET_POST_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        comments: [...action.payload.comments],
      };

    // case types.CREATE_NEW_POST_STARTED:
    //   return { ...state, loading: true };
    // case types.CREATE_NEW_POST_SUCCESS:
    //   return { ...state, posts: [...state.posts, action.payload], loading: false };

    case HYDRATE:
      return {
        ...state,
        ...action.payload.id,
        ...action.payload.title,
        ...action.payload.body,
        ...action.payload.comments,
      };
    default:
      return state;
  }
};

export default postReducer;
