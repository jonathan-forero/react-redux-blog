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
            type: ActionType.TASK_SAVED
        });


    } catch (error) {
        dispatch({
            type: ActionType.ERROR,
            payload: error.message + ' - Save Task Fail, please try later'
        });
    }
}

export const editTask = (editedTask) => async (dispatch) => {
    dispatch({
        type: ActionType.LOADING
    });

    try {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${editedTask.id}`, editedTask);
        dispatch({
            type: ActionType.TASK_SAVED
        });


    } catch (error) {
        dispatch({
            type: ActionType.ERROR,
            payload: error.message + ' - Save Task Fail, please try later'
        });
    }
}

export const changeChekbox = (userId, taskId) => (dispatch, getState) => {
    const { tasks } = getState().tasksReducer;
    const selected = tasks[userId][taskId];

    const updatedTasks = {
        ...tasks
    };
    updatedTasks[userId] = {
        ...tasks[userId]
    };
    updatedTasks[userId][taskId] = {
        ...tasks[userId][taskId],
        completed: !selected.completed
    };

    dispatch({
        type: ActionType.UPDATE,
        payload: updatedTasks
    });
}

export const deleteTask = (taskId) => async (dispatch) => {
    dispatch({
        type: ActionType.LOADING
    });

    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`);
        dispatch({
            type: ActionType.GET_ALL,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: ActionType.ERROR,
            payload: error.message + ' - Delete Task Fail, please try later'
        });
    }
}

export const cleanForm = () => (dispatch) => {
    dispatch({
        type: ActionType.CLEAN
    });
}
