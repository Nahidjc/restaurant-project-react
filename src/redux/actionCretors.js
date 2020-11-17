import { ADD_COMMENT } from "./actiontypes"

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