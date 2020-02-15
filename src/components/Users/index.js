import React from 'react';
import axios from 'axios';

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: response.data
    });
  }

  setRows = () => (
    this.state.users.map((user) => (
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

export default Users;