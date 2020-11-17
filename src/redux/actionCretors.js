import DISHES from "../data/dishes"
import { ADD_COMMENT, DISHES_LOADING, LOAD_DISHES } from "./actiontypes"

export const addComment = (dishId, rating, author, comment) => {
    return {
        type: ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment
        }
    }
}
export const loadDishes = dishes => ({
    type: LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: DISHES_LOADING
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        setTimeout(() => {
            dispatch(loadDishes(DISHES))
        }, 2000);
    }
}