import * as actionTypes from "./actions";

const initialState = {
    restaurantData: null,
    totalPrice: 0,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return {
                //placeholder
            };
        case actionTypes.REMOVE_ITEM:
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
