import React, { useRef, useState, useContext } from 'react';
import AuthContext from '.././store/AuthContext';
import { useHistory, NavLink } from 'react-router-dom';
import styles from './Login.module.css';
import Cartcontext from '../store/Cartcontext';
import axios from 'axios';
const Login = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
 // const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  // const [mailId, setMailId] = useState('');
  const mailref = useRef();
  const passwordref = useRef();
  const cartCtx = useContext(Cartcontext);
  const userMailId = localStorage.getItem('usermail');
  let um;
  if (userMailId != null) {
    const regex = /[`@.`]/g;
    um = userMailId.replace(regex, '');

    // console.log(um);
  }

  const switchAuthModeHandler = ()=>{
    setIsLogin(!isLogin);
  }
  axios
    .get(`https://crudcrud.com/api/c1d9e1ae0f754f14a379b3c47946b34c/cart${um}`)
    .then((response) => {
      // console.log('rendered in app when refreshed', response);
      const cartListItem = [];
      for (let i = 0; i < response.data.length; i++) {
        var item = response.data;
        // console.log('item: ' + item);
        const index = cartListItem.findIndex((i) => i.title === item.title);
        // console.log('index: ' + index)
        if (index === -1) {
          cartListItem.push(response.data[i]);
          cartCtx.setItem(cartListItem);
        } else {
          cartListItem[index].quantity = cartListItem[index].quantity + 1;
          cartCtx.setQuantity(cartListItem[index].quantity);
        }

        //   console.log(cartListItem);
      }
      // setItems(cartListItem)
    })
    .catch((err) => {
      console.error(err);
    });

  const submitLoginHandler = (e) => {
    e.preventDefault();
    let url;
    const enteredMail = mailref.current.value;
    authCtx.userMail(enteredMail);
    localStorage.setItem('usermail', enteredMail);

    const enteredPassword = passwordref.current.value;
    // console.log('saved', enteredMail, enteredPassword);
    
    
    if(isLogin){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDBuJqLrVJWStm5LJ9fPdVwCcmuZUE9rzo'
    }else{
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDBuJqLrVJWStm5LJ9fPdVwCcmuZUE9rzo'
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredMail,
            password: enteredPassword,
            returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
  
      if(response.ok){
            return response.json();
      }else{
        return response.json().then((data) => {
          let loginError = ' Authentication failed';
            if (data && data.error && data.error.message) {
              loginError = data.error.message;
            }
            alert(loginError);
        })
      }
    }).then((data)=>{
      authCtx.login(data.idToken);
      if(isLogin){
        history.replace('/Store');
      }
      else{
          alert('Authentication successful!!! Please Login to your account')
      }
    })

  };
  return (
    <>
      <nav>
      <div></div>
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
            to="/Login/Store"
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
        {/* <button to='/Login' style={{textDecoration: 'none',color: 'Black',position: 'relative', float:'right',top:'-46px',left:'-25px'}}>LOGOUT</button> */}
      </nav>

      <div
        className="page-header"
        style={{
          color: 'white',
          backgroundColor: 'gray',
          paddingTop: '110px',
          fontSize: '60px',
        }}
      >
        Welcome to Generics <br />
      </div>
      <div className={styles.form_div}>
        <h1 style={{ fontFamily: 'cursive' }}>{isLogin? 'USER LOGIN': 'SIGN IN' }</h1>
        <form onSubmit={submitLoginHandler} className={styles.form}>
          <label htmlFor="Email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            ref={mailref}
          />
          <br />
          <label htmlFor="Password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            ref={passwordref}
          />
          <br></br>
          {/* {loading && <p style={{color:'black'}}>Sending Request.....</p>} */}
          <button className={styles.btn}>{isLogin? 'Login' : 'Signup'}</button>
          <br/>
          <button
            type='button'
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </form>
       
       
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerIcons}>
          <h2 className={styles.footerText}>The Generics</h2>
        </div>
      </footer>
    </>
  );
};

export default Login;
