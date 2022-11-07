import React,{ useContext} from 'react'
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';

const Hnav = () => {
    const authCtx = useContext(AuthContext);

    const userMailId = localStorage.getItem('usermail');
  
    const isLoggedIn = authCtx.isLoggedIn;
    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem('usermail');
        authCtx.logout();
        console.log('Logged out');
      };
  return (
    <>
    <nav className="nav">
    <div style={{ display: 'flex', flexDirection: 'row', margin: '2px' }}>
      {authCtx.login && (
        <>
         {!authCtx.login && <p
            style={{
              alignItems: 'center',
              padding: '8px',
              fontSize: '15px',
              fontFamily: 'Helvetica',
            }}
          >
            User Id
          </p>}
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
        className="nav-home"
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
        ABOUT
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
    <div className="logdiv">
      {!isLoggedIn && (
        <NavLink
          to="/Login"
          style={{
            textDecoration: 'none',
            color: 'white',
            position: 'relative',
            top: '1.5px',
            padding: '8px',
            margin: '8px',
            height: '24px',
            width: '81px',
          }}
          className="login"
        >
          LOGIN
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink
          to="/Login"
          style={{
            textDecoration: 'none',
            position: 'relative',
            color: 'white',
            top: '1.5px',
            padding: '8px',
            margin: '8px',
            height: '24px',
            width: '81px',
          }}
          className="logout"
          onClick={logoutHandler}
        >
          LOGOUT
        </NavLink>
      )}
    </div>
  </nav>
  <div
        className="page-header"
        style={{ color: 'white', backgroundColor: 'gray', paddingTop: '63px' }}
      >
        The Generics <br />
        <button className="album">Get the Latest Album</button>
        <button className="play-btn">▶️</button>
      </div>
  </>
  )
}

export default Hnav