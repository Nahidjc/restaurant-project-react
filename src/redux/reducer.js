import DISHES from '../data/dishes';
import COMMENTS from '../data/comments';
const initState = {
    dishes: DISHES,
    comments: COMMENTS,
    sample: "Hello World"
}

export const Reducer = (state = initState, action) => {
    if (action.type === 'TEST') {
        return {
            ...state,
            sample: action.str
        }
    }
    return state;
}