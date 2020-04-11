import React, { Component } from 'react';

class Tasks extends Component {

  componentDidMount () {
    this.props.getAll();
  }

  render() {
    console.log(this.props);

    return (
      <div>
        Tasks Greeting!
      </div>
    );
  }
}

export default Tasks;
