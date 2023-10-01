import React, { useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import twitter from '../../asset/twitter.jpeg';
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button';
import { useNavigate, Link } from "react-router-dom";
import './login.css';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [
    signInWithGoogle,
    googleUser,
    googleLoading,
    googleError
  ] = useSignInWithGoogle(auth);

  if (user || googleUser) {
    navigate('/')
    console.log(user);
    console.log(googleUser);
  }
  if (error) {
    console.log(error.message)
  }
  if (loading) {
    console.log('loading...')
  }

  const handleSubmite = e => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
    const user = {
      username:username,
      name:name,
      email:email,
    }
    axios.post(`http://localhost:5000/register`,user)
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  }

  return (
    <div className="signup-container">
      <div className='logo-container'>
        <img src={twitter}
          alt='twitter'
          className='twitter-img'
        />
      </div>
      <div className='form-container'>
        <TwitterIcon
          className='twitterImage'
        />
        <h2 className='heading1'>Happing now</h2>
        <h3 className='heading2'>Join Twitter Today</h3>
        <form className='form-box' onSubmit={handleSubmite}>
          <input
            type='text'
            placeholder='@username'
            className='display-name'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='text'
            placeholder='Enter The Full Name'
            className='display-name'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email'
            className='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            className='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='btn-signup'>
            <button type='submite' className='btn'>SignUp</button>
          </div>
        </form>
        <hr />
        <div className='google-button'>
          <GoogleButton
            type='light'
            className='g-btn'
            onClick={handleGoogleSignIn}
          />
        </div>
        <div className='switchPage'>
          Already have an Account?
          <Link
            to='/login'
            style={{
              textDecoration: 'none',
              color: 'skyblue',
              fontWeight: '600',
              marginLeft: '5px'
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
