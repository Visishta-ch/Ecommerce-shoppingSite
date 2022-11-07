import React, { useContext } from 'react';
import AuthContext from '../store/AuthContext';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Cartcontext from '../store/Cartcontext';

const Header = (props) => {
  const cartctx = useContext(Cartcontext);
  let cartItemCount = 0;
  cartctx.items.forEach((item) => {
    cartItemCount += 1;
    // console.log('items in cart:', cartItemCount);
  });

  const userMailId = localStorage.getItem('usermail');
  const authCtx = useContext(AuthContext);
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('usermail');
    authCtx.logout();

    console.log('Logged out');
  };
  return (
    <div>
      <nav>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {authCtx.login && (
            <>
              <p
                style={{
                  alignItems: 'center',
                  padding: '8px',
                  fontSize: '15px',
                  fontFamily: 'Helvetica',
                }}
              >
                User
              </p>
              <span>
                <button
                  style={{
                    padding: '10px',
                    margin: '10px',
                    textDecoration: 'none',
                    background: 'none',
                    color: 'white',
                    fontFamily: 'monospace',
                    fontSize: '16px',
                  }}
                >
                  {userMailId}
                </button>
              </span>
            </>
          )}
        </div>

        <div className="nav-bar">
          <NavLink
            to=""
            style={{
              padding: '10px',
              margin: '10px',
              textDecoration: 'none',
              color: 'white',
            }}
          >
            HOME
          </NavLink>
          <NavLink
            to="/Store"
            style={{
              padding: '10px',
              margin: '10px',
              textDecoration: 'none',
              color: 'white',
            }}
            className="nav-store"
          >
            STORE
          </NavLink>
          <NavLink
            to="/About"
            style={{
              padding: '10px',
              margin: '10px',
              textDecoration: 'none',
              color: 'white',
            }}
            className="nav-about"
          >
            ABOUT{' '}
          </NavLink>
          <NavLink
            to="/Contact"
            style={{
              padding: '10px',
              margin: '10px',
              textDecoration: 'none',
              color: 'white',
            }}
            className="nav-about"
          >
            CONTACT
          </NavLink>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <div style={{ display: 'flex' }}>
          
            <button className="cart-btn" onClick={props.OpenCartHandler}>
              Cart
            </button>
            <span className="cart-number">{cartItemCount}</span>
          </div>
          <button
            to="/Login"
            style={{
              textDecoration: 'none',
              color: 'white',
              position: 'relative',
              margin: '8px',

              background: 'none',
            }}
            onClick={logoutHandler}
            className="logoutbtn"
          >
            LOGOUT
          </button>
        </div>
      </nav>
      <div className="header">
        <header className="page-header">The Generics</header>
      </div>
    </div>
  );
};

export default Header;
