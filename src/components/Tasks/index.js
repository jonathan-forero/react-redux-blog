import { connect } from 'react-redux';
import Tasks from './Tasks';
import Save from './Save';
import * as tasksActions from '../../actions/tasks/tasksAction';

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export const TasksConnect = connect(
  mapStateToProps,
  tasksActions
)(Tasks);

export const SaveConnect = connect(
  mapStateToProps,
  tasksActions
)(Save);

