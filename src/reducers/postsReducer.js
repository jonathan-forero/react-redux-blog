import * as ActionType from '../actions/posts/types';

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionType.UPDATE:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: ''
            };

        case ActionType.ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default: return state;
    }
}
