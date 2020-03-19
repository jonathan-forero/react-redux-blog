import { connect } from 'react-redux';
import * as usersActions from '../../actions/users/usersActions';
import Users from './Users';

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

const UsersConnect = connect(
  mapStateToProps,
  usersActions
)(Users);

export default UsersConnect;
