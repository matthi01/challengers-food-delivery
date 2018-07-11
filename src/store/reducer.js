import * as actionTypes from "./actions";

const initialState = {
    restaurantData: null,
    orderData: [],
    totalPrice: 0,
    error: false
};

const reducer = (state = initialState, action) => {
    let orderIndex;
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            orderIndex = state.orderData.findIndex(
                el => el.item === action.item
            );

            if (orderIndex !== -1) {
                return {
                    ...state,
                    totalPrice: state.totalPrice + action.price,
                    orderData: [
                        ...state.orderData,
                        (state.orderData[orderIndex].quantity =
                            state.orderData[orderIndex].quantity + 1)
                    ]
                };
            } else {
                let newItem = {
                    restaurantId: action.restaurantId,
                    item: action.item,
                    quantity: 1
                };

                return {
                    ...state,
                    totalPrice: state.totalPrice + action.price,
                    orderData: [...state.orderData, newItem]
                };
            }

        case actionTypes.REMOVE_ITEM:
            orderIndex = state.orderData.findIndex(
                el => el.item === action.item
            );

            if (orderIndex !== -1 && state.orderData[orderIndex].quantity > 0) {
                console.log(action.price);
                return {
                    ...state,
                    totalPrice: state.totalPrice - action.price,
                    orderData: [
                        ...state.orderData,
                        (state.orderData[orderIndex].quantity =
                            state.orderData[orderIndex].quantity - 1)
                    ]
                };
            } else {
                return state;
            }
        case actionTypes.SAVE_RESTAURANT_DATA:
            return {
                ...state,
                restaurantData: action.restaurants,
                error: false
            };
        case actionTypes.ERROR_ENCOUNTERED:
            return {
                ...state,
                error: true
            };

        case actionTypes.REMOVE_ORDER:
        // placeholder -NOTE - build order screen first
        default:
            return state;
    }
};

export default reducer;
