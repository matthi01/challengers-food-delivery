import axios from "../Axios/Axios-restaurants";

//action types
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SAVE_RESTAURANT_DATA = "SAVE_RESTAURANT_DATA";
export const ERROR_ENCOUNTERED = "ERROR_ENCOUNTERED";
export const SET_LOADING = "SET_LOADING";
export const CLEAR_LOADING = "CLEAR_LOADING";
export const REMOVE_ORDER = "REMOVE_ORDER";

//action creators
export const addItem = (restaurantId, item, price) => {
    return {
        type: ADD_ITEM,
        restaurantId: restaurantId,
        item: item,
        price: price
    };
};

export const removeItem = (restaurantId, item, price) => {
    return {
        type: REMOVE_ITEM,
        restaurantId: restaurantId,
        item: item,
        price: price
    };
};

export const saveRestaurantData = data => {
    return {
        type: SAVE_RESTAURANT_DATA,
        restaurants: data
    };
};

export const errorEncountered = () => {
    return {
        type: ERROR_ENCOUNTERED
    };
};

// fetching restaurant/menu data - need to call synchronous action creator to save the result to state
export const fetchRestaurantData = () => {
    return dispatch => {
        axios
            .get("/challenge")
            .then(response => {
                dispatch(saveRestaurantData(response.data));
            })
            .catch(err => {
                dispatch(errorEncountered());
            });
    };
};

export const removeOrder = restaurantId => {
    return {
        type: REMOVE_ORDER,
        restaurantId: restaurantId
    };
};
