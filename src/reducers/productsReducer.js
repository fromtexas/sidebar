import initialState from './initialState';
import {GET_ALL} from '../constants/actionTypes';

const productsReducer = (state = initialState.options, action) => {
  switch (action.type) {
    case GET_ALL:
      return action.options;

    default:
      return state;
  }
};

export default productsReducer;
