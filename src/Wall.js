import React, {useState, useEffect} from 'react';
import Comment from './Comment';

const Wall = () => {

  const [comments, setComments] = useState([]);
  useEffect(() => {
    // get comments
  });

  const mapComments = ({username, comment}) => 
    <Comment username={username} comment={comment}></Comment>;

  return <div>
    <h2>Comments</h2>
    {comments.map(mapComments)}
  </div>;
}

export default Wall;