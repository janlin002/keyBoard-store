import { ADD_TODOITEM, CHECKBOX_CLICK, ITEMID, ADD_TO_CART, REMOVE_ITEM } from './actionTypes';

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
export const removeItem = (index) =>{
    return {
        type: REMOVE_ITEM,
        payload: index
    }
}