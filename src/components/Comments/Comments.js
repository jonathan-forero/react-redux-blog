import React from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

const Comments = (props) => {
  const setComments = () => (
    props.comments.map(comment => (
      <li key={comment.id}>
        <b>
          <u>
            { comment.email }
          </u>
        </b>
        <br/>
        { comment.body }
      </li>
    ))
  );

  return (
    props.errorComments ? <Error  message={props.errorComments}/> :
      props.loadingComments && !props.comments.length ? <Spinner /> :
        (
          <div>
            <ul className="comments">
              { setComments() }
            </ul>
          </div>
        )
  );
}

export default Comments;