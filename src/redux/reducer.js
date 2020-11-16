import DISHES from '../data/dishes';
import COMMENTS from '../data/comments';
const initState = {
    dishes: DISHES,
    comments: COMMENTS,
}

export const Reducer = (state = initState, action) => {
    if (action.type === 'ADD_COMMENT') {
        let comment = action.payload;
        comment.id = state.comments.length;
        comment.date = new Date().toDateString();
        //console.log(comment);
        return {
            ...state,
            comments: state.comments.concat(comment)
        }
    }
    return state;
}