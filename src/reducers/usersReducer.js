import * as ActionType from '../actions/users/types';

const INITIAL_STATE = {
    users: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_ALL_USERS:
            return {...state, users: action.payload}
        default: return state;
    }
}
