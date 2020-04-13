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
      <div key={taskId}>
        <input
          type="checkbox"
          defaultChecked={byUser[taskId].completed}
          onChange={ () => changeChekbox(userId, taskId) }
        />
        {
          byUser[taskId].title
        }
        <Link to={`/react-redux-blog/tasks/save/${userId}/${taskId}`}>
          <button className="m_left">
            Edit
          </button>
        </Link>
        <button
          className="m_left"
          onClick={ () => deleteTask(taskId) }
        >
            Delete
        </button>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <Link to='/react-redux-blog/tasks/save'>
          <button>
            Add
          </button>
        </Link>
        { this.showContent() }
      </div>
    );
  }
}

export default Tasks;
