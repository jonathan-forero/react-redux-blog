import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

class Tasks extends Component {

  componentDidMount () {
    if (!Object.keys(this.props.tasks).length) {
      this.props.getAll();
    }
  }

  componentDidUpdate () {
    const {
      tasks,
      loading,
      getAll
    } = this.props;

    if (!Object.keys(tasks).length && !loading) {
      getAll();
    }
  }

  showContent = () => {
    const {
      tasks,
      loading,
      error
    } = this.props;

    return (
      loading ? <Spinner /> :
        error ? <Error message={error} /> :
          (
            Object.keys(tasks).map(userId => (
              <div key={userId}>
                <h2>
                  User {userId}
                </h2>
                <div className="tasks-container">
                  { this.setTasks(userId) }
                </div>
              </div>
            ))
          )
    )
  }

  setTasks = (userId) => {
    const { tasks, changeChekbox, deleteTask } = this.props;
    const byUser = {
      ...tasks[userId]
    };

    return Object.keys(byUser).map(taskId => (
      <div className="grid">
        <div className="row task-row" key={taskId}>
          <div>
            <input
              type="checkbox"
              defaultChecked={byUser[taskId].completed}
              onChange={ () => changeChekbox(userId, taskId) }
            />
          </div>
          <div className="col-6">
            {
              byUser[taskId].title
            }
          </div>
          <div className="col-1">
            <Link to={`/react-redux-blog/tasks/save/${userId}/${taskId}`}>
              <div className="edit-solid icon" title="Edit"></div>
            </Link>
          </div>
          <div className="col-1">
            <div
                className="trash-solid icon m_left"
                onClick={ () => deleteTask(taskId) }
                title="Delete"
              >
              </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="flex-column">
        <Link to='/react-redux-blog/tasks/save'>
          <div class="card-solid icon" title="Add"></div>
        </Link>
        { this.showContent() }
      </div>
    );
  }
}

export default Tasks;
