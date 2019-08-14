import React from 'react';

const Login = ({setLoggedIn, setUser}) => {

  const handleLogin = e => {
    e.preventDefault();
    const user = e.target.username.value;
    
    if (user) {
      setUser(user);
      setLoggedIn(true);
    }
  }
 
  return <form onSubmit={handleLogin}>
    <label htmlFor='username'>Username:</label>
    <input id='username' />
    <button>Login</button>
  </form>
}

export default Login;