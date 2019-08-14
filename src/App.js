import React, {useState, useEffect} from 'react';
import Wall from './Wall';
import CommentForm from './Comment-form';
import Login from './Login';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState('p');

  const [user, setUser] = useState('');

  return loggedIn ? 
    <>
      <Wall />
      <CommentForm user={user} />
    </>
    :
    <Login />
}

export default App;
