import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import Comments from '../Comments/Comments';

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
      usersReducer.error ?
        <Error message={usersReducer.error} /> :
        usersReducer.loading ? <Spinner /> :
            (<h1 className="text-center">Posts from { name }</h1>)
    );
  };

  setPosts = () => {
    const {
      usersReducer: { users },
      postsReducer,
      postsReducer: { posts },
      match: { params: { key } }
    } = this.props;

    return (
      postsReducer.error ? <Error message={postsReducer.error}/> :
        postsReducer.loading ? <Spinner /> :
          posts.length && 'posts_key' in users[key] ? (
            this.showInfo(posts[users[key].posts_key], users[key].posts_key)
          ) : null
    )
  };

  showInfo = (posts, post_key) => (
    posts.map( (post, com_key) => (
      <div
        className="post_title"
        key={ post.id }
        onClick={ () => this.showComments(post_key, com_key, post.comments) }
      >
        <h2>
          { post.title }
        </h2>
        <p>
          { post.body }
        </p>
        {
          post.open ? <Comments /> : ''
        }
      </div>
    ))
  );

  showComments = (post_key, com_key, comments) => {
    this.props.openClose(post_key, com_key);
    this.props.getComments(post_key, com_key);
  };

  render() {
    console.log(this.props);
    return (
      <>
        { this.setUser() }
        { this.setPosts() }
      </>
    );
  }
}

export default Posts;
