import React, { useState, useEffect} from 'react';
import './login.css';
import twitter from '../../asset/twitter.jpeg';
import auth from "../../firebase.init";
import TwitterIcon from '@mui/icons-material/Twitter';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from "react-router-dom";




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);

   useEffect(() => {
        if (user || googleUser) {
            navigate('/');
            console.log(user);
            console.log(googleUser);
        }
    }, [user, googleUser, navigate]);

    if (error) {
        console.log(error.message)
    }
    if (loading) {
        console.log('loading...')
    }

    const handleSubmite = e => {
        e.preventDefault();
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }


    return (
        <div className="login-container">
            <div className='logo-container'>
                <img src={twitter} alt='twitter' />

            </div>
            <div className='form-container'>
                <TwitterIcon
                    className='twitterImage'
                />
                <h2 className='heading1'>Happing now</h2>
                <h3 className='heading2'>Join Twitter Today</h3>
                <form className='form-box' onSubmit={handleSubmite}>
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
                    <div className='btn-login'>
                        <button type='submite' className='btn'>Login</button>
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
                    Don't have Account?
                    <Link
                        to='/Signup'
                        style={{
                            textDecoration: 'none',
                            color: 'skyblue',
                            fontWeight: '600',
                            marginLeft: '5px'
                        }}
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
