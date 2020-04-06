import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

class Posts extends Component {

  async componentDidMount() {
    const {
      getAllUsers,
      getPostsByUser,
      match: { params: { key } }
    } = this.props;

    if (!this.props.usersReducer.users.length){
      await getAllUsers();
    }
    if (this.props.usersReducer.error){
      return;
    }
    if (!('posts_key' in this.props.usersReducer.users[key])) {
      getPostsByUser(key);
    }
  };

  setUser = () => {
    const {
      usersReducer,
      match: { params: { key } }
    } = this.props;

    if (usersReducer.error) {
      return <Error  message={usersReducer.error} />;
    }

    if (usersReducer.loading) {
      return <Spinner />;
    }

    const name = usersReducer.users.length ? usersReducer.users[key].name : null;

    return (
      <h1>
        Posts from { name }
      </h1>
    );
  };

  render() {
    console.log(this.props);
    return (
      <div>
        { this.setUser() }
      </div>
    );
  }
}

export default Posts;
