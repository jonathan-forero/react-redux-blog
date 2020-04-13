import * as ActionType from '../actions/tasks/types';

const INITIAL_STATE = {
    tasks: {},
    loading: false,
    error: '',
    userId: '',
    title: '',
    goBack: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ActionType.GET_ALL:
            return {
                ...state,
                tasks: action.payload,
                loading: false,
                error: '',
                goBack: false
            };

        case ActionType.LOADING:
            return {...state, loading: true};

        case ActionType.ERROR:
            return {...state, error: action.payload, loading: false};

        case ActionType.CHANGE_USER_ID:
            return {...state, userId: action.payload};

        case ActionType.CHANGE_TITLE:
            return {...state, title: action.payload};

        case ActionType.TASK_SAVED:
            return {
                ...state,
                loading: false,
                tasks: {},
                error: '',
                goBack: true,
                userId: '',
                title: ''
            };

        case ActionType.UPDATE:
            return {...state, tasks: action.payload};

        case ActionType.CLEAN:
            return {...state, userId: '', title: ''};

        default: return state;
    }
}
