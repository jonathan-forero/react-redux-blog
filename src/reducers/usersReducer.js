import * as ActionType from '../actions/users/types';

const INITIAL_STATE = {
    users: [],
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ActionType.GET_ALL_USERS:
            return {...state, users: action.payload, loading: false};

        case ActionType.LOADING:
            return {...state, loading: true};

        case ActionType.ERROR:
            return {...state, error: action.payload, loading: false};

        default: return state;
    }
}
