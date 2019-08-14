import React from 'react';

const Login = () => {

  const handleLogin = e => {
    e.preventDefault()
    // handle login
  }
 
  return <form onSubmit={handleLogin}>
    <label htmlFor='username'>Username:</label>
    <input id='username' />
    <button>Login</button>
  </form>
}

export default Login;