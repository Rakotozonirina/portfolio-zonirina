import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/photo-logo/my-logo.svg';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../styles/Navbar.css';

const Navbar = () => {
return (
    <>
        <header>
            <nav className='navbar navbar-expand-lg navbar-light back-color'>
                <section className='container-fluid'>
                    <a className='navbar-brand nav-link navbar-brand-img' href="#">
                        <img src={Logo} alt='logo' width='100' height='50'/>
                    </a>
                </section>
            </nav>
        </header>
    </>
)
}

export default Navbar;
