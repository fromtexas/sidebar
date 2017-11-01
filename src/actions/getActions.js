import {get} from '../utils/getProducts';
import {GET_ALL} from '../constants/actionTypes';

export const getAll = (options) => ({
  type: GET_ALL,
  options
});

export const recieveAll = () => {
  return (dispatch, getState) => {
    return get().then((res) => {
      dispatch(getAll(res))
    });
  };
};
