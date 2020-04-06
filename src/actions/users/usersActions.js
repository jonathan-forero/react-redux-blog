import axios from 'axios';
import * as ActionType from '../users/types';

export const getAll = () => async (dispatch) => {
    dispatch({
        type: ActionType.LOADING
    });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: ActionType.GET_ALL,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ActionType.ERROR,
            payload: error.message + ' - User info not available'
        });
    }
}
