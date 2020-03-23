import axios from 'axios';
import * as ActionType from '../posts/types';

export const getAll = () => async (dispatch) => {
    dispatch({
        type: ActionType.LOADING
    });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: ActionType.GET_ALL,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ActionType.ERROR,
            payload: error.message
        });
    }
}
