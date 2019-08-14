import React, {useState} from 'react';

const CommentForm = () => {
  const [inputVal, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST to /comments
    // GET /comments
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={inputVal} />
      <button>Submit</button>
    </form>
  );
}

export default CommentForm;