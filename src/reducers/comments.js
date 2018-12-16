import { SAVE_COMMENT } from 'actions/types';

const defaultState = [];

export default function(state = defaultState, action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
