import React from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

class Users extends React.Component {

  componentDidMount() {
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

  setContent = () => {
    return this.props.error ?
      <Error message={this.props.error} />:
      this.props.loading ?
        <Spinner />:
        (
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
        );
  }

  render () {
    return (
      <div>
        { this.setContent() }
      </div>
    );
  }
}

export default Users;
