import { connect } from 'react-redux';
import Tasks from './Tasks';
import * as tasksActions from '../../actions/tasks/tasksAction';

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

const TasksConnect = connect(
  mapStateToProps,
  tasksActions
)(Tasks);

export default TasksConnect;
