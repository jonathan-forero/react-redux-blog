import { connect } from 'react-redux';
import Posts from './Posts';
import * as usersActions from '../../actions/users/usersActions';
import * as postsActions from '../../actions/posts/postsActions';

const { getAll: getAllUsers } = usersActions;
const { getByUser: getPostsByUser, openClose } = postsActions;

const mapStateToProps = ({ usersReducer, postsReducer }) => {
  return {
    usersReducer,
    postsReducer,
  };
};

const dispatchToProps = {
  getAllUsers,
  getPostsByUser,
  openClose
};

const PostsConnect = connect(
  mapStateToProps,
  dispatchToProps
)(Posts);

export default PostsConnect;
