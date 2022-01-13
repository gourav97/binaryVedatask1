import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


import logo from '../../assets/logo-white.svg';
import './Navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Why Marvel?</a></p>
  <p><a href="#wbv">Enterprise</a></p>
  <p><a href="#wbv">Pricing</a></p>
  </>

)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bv__navbar">
      <div className="bv__navbar-links-left">
        <div className="bv__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="bv__navbar-links_container-left">
        <Link className='options' to='/developer'>| Developer</Link>

         
      
        </div>

      </div>
      <div className='bv__navbar-links-right'>

      <div className="bv__navbar-links_container">
          <Menu/>

        </div>
      <div className="bv__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up  free</button>
      </div>
      </div>
      <div className='bv__navbar-menu'>
        {toggleMenu?
        <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
      :<RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
      
      }
      {toggleMenu && (
        <div className='bv__navbar-menu_container scale-up-center'>
          <div className='bv__navbar-menu_container-links'>
            <Menu/>
            <div className="bv__navbar-menu_container-links-sign">
        <p>Sign in</p>
        <button type="button">Sign up  free</button>
      </div>
          </div>
        </div>
      )}
      </div>

    </div>
  );
};

export default Navbar;