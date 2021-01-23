import * as types from '../actions/types';
// import { PostActionType } from '../actions/types';

const initialState = {
  posts: [],
  loading: false,
};

const postReducer = (state = initialState, action): PostsState => {
  switch (action.type) {
    case types.GET_POSTS_STARTED:
      return { ...state, loading: !state.posts };
    case types.GET_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false };

    case types.CREATE_NEW_POST_STARTED:
      return { ...state, loading: true };
    case types.CREATE_NEW_POST_SUCCESS:
      return { ...state, posts: [...state.posts, action.payload], loading: false };

    default:
      return state;
  }
};

export default postReducer;
