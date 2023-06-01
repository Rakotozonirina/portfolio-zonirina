import React from 'react';
import Logo from '../assets/photo-logo/my-logo.svg';
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
