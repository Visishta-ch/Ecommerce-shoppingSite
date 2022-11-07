import React,{useRef} from 'react'
import Foot from './Foot'
import Navbar from './Navbar'
import './Contact.css'
const ContactUS = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');


    const saveUserDetails = (e) =>{
        e.preventDefault();
        console.log('saveUserDetails')
        const userCredentials = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        addToDataBase(userCredentials)
    }

    async function addToDataBase(userCredentials){
        const response = await fetch('https://ecommerce-site-edc75-default-rtdb.firebaseio.com/userdetails.json',{
            method: 'POST',
            body:JSON.stringify(userCredentials),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        console.log('user data is stored as',data);
    }

  return (
    <>
        
        <Navbar />
        <div className="page-contact">
        <div></div>
        <div >
        <h1>Please Fill in the Form to Proceed </h1>
        <div className="form-div">
            
            <form onSubmit={saveUserDetails}>
                <label htmlFor='name'>User Name</label><br/>
                <input type='text' id='name' placeholder ='Your Name' ref={nameRef}/><br/>
                <label htmlFor='email'>E-Mail</label><br/>
                <input type='text' id='email' placeholder = 'Your Email' ref={emailRef}/> <br/>
                <label htmlFor='password'>Password</label><br/>
                <input type='password' id='password' placeholder='Password' ref={passwordRef}/><br/>
                <button className='btn'>Submit Details</button>
            </form>
            </div>
            </div>
        </div>
       
    <Foot />
 </>
  )
}

export default ContactUS