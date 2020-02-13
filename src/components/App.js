import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    this.setState({
      users: [
        {
          name: 'Tatán',
          email: 'forerojonathan@gmail.com',
          link: 'https://github.com/Clonathan86'
        },
        {
          name: 'Platzi',
          email: 'platzi@platzi.com',
          link: 'https:/platzi.com'
        }
      ]
    });
  }

  setRows = () => (
    this.state.users.map((user) => (
      <tr>
        <td>
          { user.name }
        </td>
        <td>
          { user.email }
        </td>
        <td>
          { user.link }
        </td>
      </tr>
    ))
  );

  render () {
    return (
      <div className="margin">
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

export default App;
