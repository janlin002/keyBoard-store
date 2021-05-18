import { ADD_TODOITEM, CHECKBOX_CLICK, ITEMID, ADD_TO_CART } from '../action/actionTypes';
import _ from 'lodash';
const initialState = {
  checkboxCheck: [],
  itemId: '',
  orderId: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOITEM:
    case CHECKBOX_CLICK:
      const { checkboxCheck } = state;
      const value = action.payload;
      return {...state, checkboxCheck:_.xor(checkboxCheck, [value])}
    case ITEMID:
      const id = action.payload;
      return {...state, itemId: id}
    case ADD_TO_CART:
      const { orderId } = state;
      const item = action.payload;
      console.log(item, 'reducer');
      return {...state, orderId: _.union(orderId, [item])}
    default:
      return state;
  }
};
