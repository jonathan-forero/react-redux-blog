import React, { Component } from 'react';

class Posts extends Component {

  async componentDidMount() {
    if(!this.props.usersReducer.users.length){
      await this.props.getAllUsers();
    }
    this.props.getPostsByUser(this.props.match.params.key);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>
          Posts from ...
        </h1>
      </div>
    );
  }
}

export default Posts;
