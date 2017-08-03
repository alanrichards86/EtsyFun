import {FILTER_PRODUCTS} from '../actionTypes/actionTypes';

// const filterProducts = function (filterType) {
//   return {
//     type: FILTER_PRODUCTS,
//     payload: filterType
//   }
// }

const makeActionCreator = function (actionType) {
  return function (payload) {
    return {
      type: actionType,
      payload: payload
    }
  }
}

export const filterProducts = makeActionCreator(FILTER_PRODUCTS);
