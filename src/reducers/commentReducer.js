
import { COMMENT_SAVE } from '../actions/types';
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_SAVE:
        return [...state, action.payload];

    default:
        return state
  }
}
