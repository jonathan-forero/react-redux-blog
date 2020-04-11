import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import tasksReducer from './tasksReducers';

export default combineReducers({
    usersReducer,
    postsReducer,
    tasksReducer,
});
