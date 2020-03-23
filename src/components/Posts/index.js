import { connect } from 'react-redux';
import Posts from './Posts';
import * as usersActions from '../../actions/users/usersActions';

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

const PostsConnect = connect(
  mapStateToProps,
  usersActions
)(Posts);

export default PostsConnect;
