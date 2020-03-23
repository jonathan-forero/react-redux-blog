import React from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import Table from '../Table';

class Users extends React.Component {

  componentDidMount() {
    if(!this.props.users.length){
      this.props.getAll();
    }
  }

  setContent = () => {
    return (
      this.props.error ?
        <Error message={this.props.error} /> :
        this.props.loading ? <Spinner /> : <Table />
    );
  }

  render () {
    return (
      <div>
        <h1>Users</h1>
        { this.setContent() }
      </div>
    );
  }
}

export default Users;
