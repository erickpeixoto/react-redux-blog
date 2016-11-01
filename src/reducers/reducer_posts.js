import { FETCH_POSTS } from '../actions/index';

const INIT_STATE = { all: [], post: null };

export default (state = INIT_STATE, action) => {

    switch (action.type) {
      case FETCH_POSTS:
          return {...state, all: action.payload.data};
      default:
      return state;
    }

}