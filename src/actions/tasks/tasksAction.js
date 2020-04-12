import axios from 'axios';
import * as ActionType from '../tasks/types';

export const getAll = () => async (dispatch) => {
    dispatch({
        type: ActionType.LOADING
    });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        const tasks = {};
        response.data.map(task => (
            tasks[task.userId] = {
                ...tasks[task.userId],
                [task.id]: {
                    ...task
                }
            }
        ));

        dispatch({
            type: ActionType.GET_ALL,
            payload: tasks
        });
    } catch (error) {
        dispatch({
            type: ActionType.ERROR,
            payload: error.message + ' - Tasks info not available'
        });
    }
}

export const changeUserId = (userId) => (dispatch) => {
    dispatch({
        type: ActionType.CHANGE_USER_ID,
        payload: userId
    });
}

export const changeTitle = (title) => (dispatch) => {
    dispatch({
        type: ActionType.CHANGE_TITLE,
        payload: title
    });
}

export const saveTask = (newTask) => async (dispatch) => {
    dispatch({
        type: ActionType.LOADING
    });

    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', newTask);
        dispatch({
            type: ActionType.TASK_ADDED
        });


    } catch (error) {
        dispatch({
            type: ActionType.ERROR,
            payload: error.message + ' - Save Task Fail, please try later'
        });
    }
}
