// initial state
export const initialState = {
        cartList: [],
        totalQuantity: 0,
        totalPrice: 0
    }
    // 
export const SET_CART = 'SET_CART'
export const GET_TOTAL_CART = 'GET_TOTAL_CART'

//
const reducer = (state, action) => {
    switch (action.type) {
        case SET_CART:
            {
                console.log(action)
                const body = action.payload
                console.log(state)
                state.cartList = [...body]
                return state;
            }

        case GET_TOTAL_CART:
            {
                return state;
            }
        default:
            return state;
    }
}

export default reducer