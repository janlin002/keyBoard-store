import { ADD_TODOITEM, CHECKBOX_CLICK } from '../action/actionTypes';
import _ from 'lodash';
const initialState = {
  checkboxCheck: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOITEM:
      console.log('reducer');
    case CHECKBOX_CLICK:
      const { checkboxCheck } = state;
      const value = action.payload;
      return {...state, checkboxCheck:_.xor(checkboxCheck, [value])}

    default:
      return state;
  }
};
