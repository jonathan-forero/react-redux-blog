import * as ActionType from '../actions/posts/types';

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_ALL:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: ''
            };

        default: return state;
    }
}
