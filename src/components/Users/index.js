import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';

class Users extends React.Component {

  componentDidMount() {
    /* const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: response.data
    }); */
    this.props.getAll();
  }

  setRows = () => (
    this.props.users.map((user) => (
      <tr key={ user.id }>
        <td>
          { user.name }
        </td>
        <td>
          { user.email }
        </td>
        <td>
          { user.website }
        </td>
      </tr>
    ))
  );

  render () {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            { this.setRows() }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
