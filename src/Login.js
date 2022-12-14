import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault(); // Will help it not refresh when this function is called

    // Firebase login functionality
  }

  const register = e => {
    e.preventDefault();

    // Firebase register functionality
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img 
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
            alt=''
        />
      </Link>

      <div className='login__container'>
        <h1>
            Sign-in
        </h1>

        <form>
            <h5>
                Email
            </h5>
            <input type='text' value={email} onChange= 
            {e => setEmail(e.target.value)} />

            <h5>
                Password
            </h5>
            <input type='password' value={password}
            onChange={e => setPassword(e.target.value)}
            />

            <button type='submit' onClick={signIn}
            className='login__signInButton'>Sign In</button>

            <p>
                By signing-in you agree to this FAKE AMAZON CLONE'S Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} 
            className='login__registerButton'>Create your Amazon account</button>
        </form>
      </div>
    </div>
  )
}

export default Login
