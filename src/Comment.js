import React from 'react';

const comment = ({username, comment}) => {
  return <div>
    <h3>User: <span>{username}</span></h3>
    <p>{comment}</p>
  </div>
}

export default comment;