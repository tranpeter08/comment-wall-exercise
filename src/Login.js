import React from 'react';

const Login = ({setLoggedIn}) => {

  const handleLogin = e => {
    e.preventDefault()
    setLoggedIn(e.target.value);
  }
 
  return <form onSubmit={handleLogin}>
    <label htmlFor='username'>Username:</label>
    <input id='username' />
    <button>Login</button>
  </form>
}

export default Login;