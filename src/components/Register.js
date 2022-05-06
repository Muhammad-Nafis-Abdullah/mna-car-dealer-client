/* eslint-disable no-unused-vars */
import { CubeIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';


const Register =  (e) => {
    const navigate = useNavigate();
    const formInput = useRef();
    const emailPettern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const passPettern = /^.{6,}$/;

    // create user by email and password
    const [createUserWithEmailAndPassword,regUser,regLoading,regError] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const [authUser, , ] = useAuthState(auth);

    const register = (e)=> {
        e.preventDefault();
        const name = formInput?.current?.name?.value;
        const email = formInput?.current?.email?.value;
        const password = formInput?.current?.password?.value;
        const confirmPassword = formInput?.current?.confirmPassword?.value;
        
        console.log(name,email,password,confirmPassword);
        console.log(passPettern.test(password));

        if (emailPettern.test(email) && passPettern.test(password) && password===confirmPassword) {
            createUserWithEmailAndPassword(email,password);
        }
        else if(!emailPettern.test(email) && !passPettern.test(password)){
            alert('email and password are not valid');
        }
        else if(!emailPettern.test(email)){
            alert('email is not valid');
        }
        else if(!passPettern.test(password)){
            alert('password is not valid');
        }
        else if (password!==confirmPassword) {
            alert('password not match');
        }
    }

    if (authUser && authUser.emailVerified) {
        navigate('/');
    }

    return (
        <div className='px-3'>
            {
                regLoading && <Loading/>
            }
            <form onSubmit={register} ref={formInput} className='max-w-sm mx-auto my-8 p-5 rounded-xl shadow-[0_0_15px_1px_rgba(0,0,0,0.343)] w-full  fromRight'>
                <h3 className='text-center mb-10 text-dark font-medium'>Register</h3>
                <div className="input-container">
                    <input type="text" name='name' className="input-field" required/>
                        <label className="input-label">Name</label>
                </div>
                <div className="input-container">
                    <input type="email" name='email' className="input-field" required/>
                        <label className="input-label">Email address</label>
                </div>
                <div className="input-container">
                    <input type="password" name='password' className="input-field" placeholder='minimum 6 character' required/>
                        <label className="input-label">Password</label>
                </div>
                <div className="input-container">
                    <input type="password" name='confirmPassword' className="input-field" required/>
                        <label className="input-label">Confirm password</label>
                </div>
                <p className='font-medium mb-5 flex items-center gap-2'>
                    <CubeIcon className='text-gray-900 h-6'/> Already have an Account. 
                    <Link className='text-sky-700 underline decoration-[3px] underline-offset-2 hover:scale-110 duration-150' to='/login'>Login</Link>
                </p>
                <input 
                type="submit"
                className="btn btn-dark d-block mx-auto" value="Register"/>
            </form>
        </div>
    );
};

export default Register;