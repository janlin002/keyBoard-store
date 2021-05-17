import { ADD_TODOITEM, CHECKBOX_CLICK, ITEMID } from '../action/actionTypes';
import _ from 'lodash';
const initialState = {
  checkboxCheck: [],
  itemId: '',
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
    default:
      return state;
  }
};
