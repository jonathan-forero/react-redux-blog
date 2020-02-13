import React from 'react';

const App = () => {
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
          <tr>
            <td>
              Tatán
            </td>
            <td>
              forerojonathan@gmail.com
            </td>
            <td>
              https://github.com/Clonathan86
            </td>
          </tr>
          <tr>
            <td>
              Platzi
            </td>
            <td>
              platzi@platzi.com
            </td>
            <td>
              https:/platzi.com
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
