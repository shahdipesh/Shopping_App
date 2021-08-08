import addItemToCart from './carts.utils'

const initialState = {
    visible: false,
    items: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'CHANGE_VISIBILITY':
            return {
                ...state,
                visible: !state.visible
            }
        case 'ADD_ITEMS':
            return {
                ...state,
                items: addItemToCart(state.items, payload)

            }
        case 'DELETE_ITEM':

            return {
                ...state,
                items: state.items.filter(el => el.id != payload)

            }
        case 'INCREASE_QUANTITY':
            const newArray = [...state.items];
            newArray.forEach(item=>{if(item.id==payload){
                item.quantity++
               }
               })
            return {
                ...state,
                items: newArray

            }
            case 'DECREASE_QUANTITY':
                const newArray1 = [...state.items];
                newArray1.forEach(item=>{if(item.id==payload){
                    item.quantity--
                   }
                   })
                return {
                    ...state,
                    items: newArray1
    
                }

        default:
            return state
    }
}
