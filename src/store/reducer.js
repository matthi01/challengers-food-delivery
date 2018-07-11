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
                    orderData: [
                        ...state.orderData,
                        (state.orderData[orderIndex].quantity =
                            state.orderData[orderIndex].quantity + 1)
                    ]
                };
            } else {
                let newItem = { item: action.item, quantity: 1 };

                return {
                    ...state,
                    orderData: [...state.orderData, newItem]
                };
            }

        case actionTypes.REMOVE_ITEM:
            console.log("here");
            orderIndex = state.orderData.findIndex(
                el => el.item === action.item
            );

            if (orderIndex !== -1) {
                return {
                    ...state,
                    orderData: [
                        ...state.orderData,
                        (state.orderData[orderIndex].quantity =
                            state.orderData[orderIndex].quantity - 1)
                    ]
                };
            } else {
                return state;
            }

            return {
                //placeholder
            };
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
        default:
            return state;
    }
};

export default reducer;
