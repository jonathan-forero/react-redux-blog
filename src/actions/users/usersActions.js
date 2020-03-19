import axios from 'axios';
import * as ActionType from './types';

export const getAll = () => async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: ActionType.GET_ALL_USERS,
        payload: response.data
    })
}
