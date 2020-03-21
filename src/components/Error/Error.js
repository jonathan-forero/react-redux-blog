import React from 'react';

const Error = (props) => {
  return (
    <div className="text-center">
      <h2 className="red">
        Something went wrong, please try later.
      </h2>
      {props.message}
    </div>
  );
};

export default Error;
