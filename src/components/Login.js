/* eslint-disable no-unused-vars */
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { CubeIcon } from '@heroicons/react/solid';
import auth from '../firebase.init';
import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../images/google.png';
import Loading from './Loading';
import { trimError } from '../hooks/trimError';
import { toast } from 'react-toastify';

const Login = () => {
    const inputField = useRef();
    const emailPettern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    // authentication with google account
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    // authentication with email and password
    const [signInWithEmailAndPassword,emailUser,emailLoading,emailError,] = useSignInWithEmailAndPassword(auth);

    // password reseting
    const [sendPasswordResetEmail, sending, passResetError] = useSendPasswordResetEmail(auth);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [authUser, authLoading, authError] = useAuthState(auth);

    
    if (authUser) {
        navigate(from, { replace: true });
    }
    
    
    // console.log(sending);
    
    const googleSigning = (e)=> {
        e.preventDefault();
        signInWithGoogle();
    }

    const login = (e)=> {
        e.preventDefault();

        const email = inputField.current.email.value;
        const password = inputField.current.password.value;

        signInWithEmailAndPassword(email,password);
    }

    const resetPass = async ()=> {
        const email = inputField.current.email.value;
        const valid = emailPettern.test(email);

        if (valid) {
            await sendPasswordResetEmail(email);
            toast.success('password reset link was sent');
        } else {
            alert('Email is not valid')
        }
        
    }

    return (
        <div className='min-h-[90vh] flex justify-center items-center px-3 fadeIn'>
            {
                (googleLoading || authLoading || emailLoading) && <Loading/>
            }
            
            <form onSubmit={login} ref={inputField} className='max-w-sm mx-auto p-5 rounded-xl shadow-[0_0_15px_1px_rgba(0,0,0,0.343)] w-full fromLeft'>
                <h3 className='text-center mb-10 text-dark font-medium'>Login</h3>
                <div className="input-container">
                    <input type="email" name="email" className="input-field" required/>
                        <label className="input-label">Email address</label>
                </div>
                <div className="input-container">
                    <input type="password" name="password" className="input-field" required/>
                        <label className="input-label">Password</label>
                </div>
                <p className='text-center text-lg text-red-500'>{trimError(googleError)}</p>
                <p className='text-center text-lg text-red-500'>{trimError(emailError)}</p>
                <p className='font-medium mb-3 flex items-center gap-2'>
                    <CubeIcon className='text-gray-900 h-6'/>
                    Create New Account. 
                    <Link className='text-sky-700 underline decoration-[3px] underline-offset-2 hover:scale-110 duration-150' to='/register'>Register</Link>
                </p>
                <p className='font-medium ml-2 flex items-center gap-2'>
                <span
                    onClick={resetPass}
                    className='text-sky-700 underline decoration-[3px] underline-offset-2 hover:scale-110 duration-150 cursor-pointer'>Forget password</span>
                </p>
                <div className='flex justify-center items-center gap-5 mt-5'>
                    <button 
                    onClick={googleSigning}
                    className="py-1.5 px-2.5 rounded-md shadow-[0_0_15px_1px_rgba(0,0,0,0.343)] text-gray-900/80 hover:text-gray-900 border-0 font-medium duration-150 active:scale-95 text-xs">
                        <img className='h-7 inline-block mr-1' src={google} alt="" />Login With Google
                    </button>
                    <input className="btn btn-outline-dark" type="submit" value={"Login"} />
                </div>
            </form>
        </div>
    );
};

export default Login;