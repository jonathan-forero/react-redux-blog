import * as ActionType from '../actions/tasks/types';

const INITIAL_STATE = {
    tasks: {},
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ActionType.GET_ALL:
            return {...state, tasks: action.payload, loading: false, error: ''};

        case ActionType.LOADING:
            return {...state, loading: true};

        case ActionType.ERROR:
            return {...state, error: action.payload, loading: false};

        default: return state;
    }
}
