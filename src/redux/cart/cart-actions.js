const changeVisibility=()=>{
    return {
        type:'CHANGE_VISIBILITY',
    }
}
export const deleteItem=(id)=>{
    return {
        type:'DELETE_ITEM',
        payload:id
    }
}
export const addItems=(itemObj)=>{
    return {
        type:'ADD_ITEMS',
        payload:itemObj
    }
}
export const increaseQuantity=(id)=>{
    return {
        type:'INCREASE_QUANTITY',
        payload:id
    }
}
export const decreaseQuantity=(id)=>{
    return {
        type:'DECREASE_QUANTITY',
        payload:id
    }
}

export default changeVisibility;