import React from 'react';

const App = () => {

  const setRows = () => [
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
    </tr>,
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
  ];

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
          { setRows() }
        </tbody>
      </table>
    </div>
  );
}

export default App;
