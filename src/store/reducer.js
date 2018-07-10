import * as actionTypes from "./actions";

const initialState = {
    menuItems: null,
    totalPrice: 0
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
        default:
            return state;
    }
};

export default reducer;
