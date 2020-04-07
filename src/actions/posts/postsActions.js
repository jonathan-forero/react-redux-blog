import axios from 'axios';
import * as ActionType from '../posts/types';
import * as UsuariosTypes from '../users/types';

export const getByUser = (key) => async (dispatch, getState) => {
    dispatch({
        type: ActionType.LOADING
    });

    const { users } = getState().usersReducer;
    const { posts } = getState().postsReducer;
    const user_id = users[key].id;

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

        const news = response.data.map((post) => ({
            ...post,
            comments: [],
            open: false
        }));

        const updated_posts = [
            ...posts,
            news
        ];

        dispatch({
            type: ActionType.UPDATE,
            payload: updated_posts
        });

        const posts_key = updated_posts.length - 1;
        const updated_users = [...users];
        updated_users[key] = {
            ...users[key],
            posts_key,
        };

        dispatch({
            type: UsuariosTypes.GET_ALL,
            payload: updated_users
        });

    } catch (error) {
        dispatch({
            type: ActionType.ERROR,
            payload: error.message + ' posts not available'
        });
    }
}

export const openClose = (post_key, com_key) => (dispatch, getState) => {
    const { posts } = getState().postsReducer;
    const selected = posts[post_key][com_key];
    const updated = {
        ...selected,
        open: !selected.open
    }
    posts[post_key][com_key] = updated;
    try {
        dispatch({
            type: ActionType.UPDATE,
            payload: posts
        });
    } catch (error) {
        dispatch({
            type: ActionType.ERROR,
            payload: error.message
        });
    }
}
