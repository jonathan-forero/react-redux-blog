import * as ActionType from '../actions/posts/types';

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: '',
    loadingComments: false,
    errorComments: '',
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

        case ActionType.LOADING:
            return {
                ...state,
                loading: true
            };

        case ActionType.ERROR_COMMENTS:
            return {
                ...state,
                errorComments: action.payload,
                loadingComments: false
            };

        case ActionType.LOADING_COMMENTS:
            return {
                ...state,
                loadingComments: true
            };

        case ActionType.UPDATE_COMMENTS:
            return {
                ...state,
                posts: action.payload,
                loadingComments: false,
                errorComments: ''
            };

        default: return state;
    }
}
