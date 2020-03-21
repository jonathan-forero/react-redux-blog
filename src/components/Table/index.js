import { connect } from 'react-redux';
import Table from './Table';

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

const TableConnect = connect(
  mapStateToProps
)(Table);

export default TableConnect;
