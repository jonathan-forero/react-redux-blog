import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import { Redirect } from 'react-router-dom';

class Save extends Component {
  changeUserId = (event) => {
    this.props.changeUserId(event.target.value);
  };

  changeTitle = (event) => {
    this.props.changeTitle(event.target.value);
  };

  save = () => {
    const { userId, title, saveTask } = this.props;
    const newTask = {
      userId: userId,
      title: title,
      completed: false
    };
    saveTask(newTask);
  }

  disable = () => {
    const {
      userId,
      title,
      loading
    } = this.props;

    return (
      loading ? true :
        !userId || !title ? true :
          false
    );
  };

  showAction = () => {
    const { error, loading } = this.props;
    return (
      loading ? <Spinner /> :
        error ? <Error message={error} /> :
          null
    );
  };

  render() {
    const { goBack } = this.props;
    return (
      <div className="save-tasks">
        {
          goBack ? <Redirect to="/react-redux-blog/tasks" /> : null
        }
        <h1>
          Save Task
        </h1>
        User id:
        <input
          type="number"
          value={ this.props.userId }
          onChange={ this.changeUserId }
        />
        <br/>
        <br/>
        Title:
        <input
          type="text"
          value={ this.props.title }
          onChange={ this.changeTitle }
        />
        <br/>
        <br/>
        <button
          onClick={ this.save }
          disabled={ this.disable() }
        >
          Save
        </button>
        { this.showAction() }
      </div>
    );
  }
}

export default Save;
