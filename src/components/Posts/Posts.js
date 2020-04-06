import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import { useReducer } from 'react';

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

    const name = usersReducer.users.length ? usersReducer.users[key].name : null;

    return (
      useReducer.error ?
        <Error message={usersReducer.error} /> :
          useReducer.loading ? <Spinner /> :
            (<h1>Posts from { name }</h1>)
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
