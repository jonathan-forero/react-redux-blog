import React from 'react';

const Table = (props) => {

  const setRows = () => (
    props.users.map((user) => (
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

  return (
    <>
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
    </>
  );
};

export default Table;
