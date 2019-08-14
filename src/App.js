import React, {useState, useEffect} from 'react';
import Wall from './Wall';
import CommentForm from './Comment-form';
import Login from './Login';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  console.log(loggedIn)

  return loggedIn ? 
    <>
      <Wall />
      <CommentForm user={user} />
    </>
    :
    <Login setLoggedIn={setLoggedIn} setUser={setUser} />
}

export default App;
