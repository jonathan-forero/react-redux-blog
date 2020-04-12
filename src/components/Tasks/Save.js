import React, { Component } from 'react';

class Save extends Component {
  changeUserId = (event) => {
    this.props.changeUserId(event.target.value);
  };

  changeTitle = (event) => {
    this.props.changeTitle(event.target.value);
  };

  render() {
    return (
      <div className="save-tasks">
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
        <button>
          Save
        </button>
      </div>
    );
  }
}

export default Save;
