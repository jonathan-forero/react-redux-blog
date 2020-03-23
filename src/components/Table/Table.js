import React from 'react';
import { Link } from 'react-router-dom';

const Table = (props) => {

  const setRows = () => (
    props.users.map((user, key) => (
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
        <td>
          <Link to={ `/react-redux-blog/posts/${key}` }>
            <div className="eye-solid icon"></div>
          </Link>
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
