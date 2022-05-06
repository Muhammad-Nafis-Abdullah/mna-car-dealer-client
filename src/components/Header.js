/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { trimError } from '../hooks/trimError';


const Header = () => {
    const navigate = useNavigate();
    const [user,loading,error] = useAuthState(auth);


    const logout = ()=> {
        signOut(auth).then(() => {
            toast('User logged out');
            navigate('/');
        }).catch((error) => {
            const errorMsg = trimError(error);
            toast(errorMsg);
        });
    }

    const style = (e)=> {
        return e.isActive?'link-active':'link';
    }



    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to={'/'} className='flex justify-center items-center gap-1 link-active no-underline text-2xl' replace>
                    {/* <img src={icon} alt="" className='h-10'/> */}
                    <span className='font-serif font-bold'>M.N.A Car Dealer</span>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <hr className='bg-white p-0.5 rounded-full sm:p-0'/>
                    {
                        user && 
                        <Nav className="me-auto flex justify-center items-center gap-2.5 sm:mx-auto">
                        <NavLink to={'/manage-inventory'} className={style} replace>Manage Inventory</NavLink>
                        <NavLink to={'/add-inventory'} className={style} replace>Add Inventory</NavLink>
                        <NavLink to={'/my-items'} className={style} replace>My Items</NavLink>
                    </Nav>
                    }
                    <hr className='bg-white p-0.5 rounded-full sm:p-0'/>
                    <Nav className={`flex justify-center items-center gap-2.5 py-2 ${user || 'ms-auto'}`}>
                        <NavLink to={'/'} className={style} replace><HomeIcon className={`h-6`}/></NavLink>
                        <NavLink to={'/blogs'} className={style} replace>Blogs</NavLink>
                        {
                            user?
                            <NavLink onClick={logout} to={'/'} className='btn-white font-medium' replace>Logout</NavLink>:
                            <NavLink to={'/login'} className='btn-white font-medium' replace>Login</NavLink>
                        }
                    </Nav>
                    <hr className='bg-white p-0.5 rounded-full sm:p-0'/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;