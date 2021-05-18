import { ADD_TODOITEM, CHECKBOX_CLICK, ITEMID, ADD_TO_CART } from './actionTypes';

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
export const itemId = (id) =>{
    return {
        type: ITEMID,
        payload: id
    }
}
export const addToCart = (item) =>{
    return {
        type: ADD_TO_CART,
        payload: item
    }
}