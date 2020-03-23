import React, { Component } from 'react';

class Posts extends Component {

  componentDidMount() {
    if(!this.props.usersReducer.users.length){
      this.props.getAllUsers();
    }
    this.props.getAllPosts();
  }

  render() {
    console.log(this.props);

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
