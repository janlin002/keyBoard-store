import { ADD_TODOITEM, CHECKBOX_CLICK } from './actionTypes';

export const addToDoItem = () =>{
    return {
        type: ADD_TODOITEM
    }
}
export const checkboxClick = (value) =>{
    return {
        type: CHECKBOX_CLICK,
        payload: value
    }
}