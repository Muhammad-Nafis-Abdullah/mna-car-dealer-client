/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import icon from "../nav-icon.png";
import { HomeIcon } from '@heroicons/react/solid'


const Header = () => {



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
                    <Nav className="me-auto flex justify-center items-center gap-2.5 sm:mx-auto">
                        <NavLink to={'/manage-inventory'} className={style} replace>Manage Inventory</NavLink>
                        <NavLink to={'/add-items'} className={style} replace>Add Items</NavLink>
                        <NavLink to={'/my-items'} className={style} replace>My Items</NavLink>
                    </Nav>
                    <hr className='bg-white p-0.5 rounded-full sm:p-0'/>
                    <Nav className="flex justify-center items-center gap-2.5 py-2">
                        <NavLink to={'/'} className={style} replace><HomeIcon className={`h-6`}/></NavLink>
                        <NavLink to={'/inventory'} className={style} replace>Inventory</NavLink>
                        <NavLink to={'/blogs'} className={style} replace>Blogs</NavLink>
                        <NavLink to={'/login'} className='btn-white font-medium' replace>Login</NavLink>
                        <NavLink to={'/'} className='btn-white font-medium' replace>Logout</NavLink>
                    </Nav>
                    <hr className='bg-white p-0.5 rounded-full sm:p-0'/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;