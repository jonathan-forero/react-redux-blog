import React, { Component } from 'react';

class Posts extends Component {

  componentDidMount() {
    if(!this.props.users.length){
      this.props.getAll();
    }
  }

  render() {
    return (
      <div>
        <h1>
          Posts from ...
        </h1>
        { this.props.match.params.key }
      </div>
    );
  }
}

export default Posts;
