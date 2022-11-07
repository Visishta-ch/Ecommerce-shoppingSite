import React,{useState} from "react";

const AuthContext = React.createContext({
    token: '' , //token that is to be generated upon successful login - so initiallly empty string
    isLoggedIn: false,  //indicates if the user is logged in(true) or out(false)-initially user is not logged in so false
    login: (token) => {}, //login function which gets token as argument... this
    logout: (token) => {}, //logout function which  tokes no argument
    userMail:(email)=>{},
    mail:''
});
//the AuthContextProvider takes props as arugment from auth context and return the props wrapped in <ACP>
export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] =useState(initialToken);
    const [mail,setMail] = useState('')

    const userLoggedIn = !!token; //( !!token is to check whether the token is generated or not ie if generated (true) or  false token)
    const loginHandler =(token)=>{
            setToken(token);
            // setMail(mail)
            localStorage.setItem('token', token);
            
    }

    const logoutHandler =()=>{
        setToken(null);
        localStorage.removeItem('token');
    }

    const userMailHandler=(mail)=>{
            console.log(mail)
            setMail(mail);
            return mail;
            // setMail(mail);
            // const userMail = mail
            // console.log('usermail is',userMail);
    }

    const contextValue = {
        token: token,
        isLoggedIn: userLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        userMail: userMailHandler,
        mail:mail,
    }
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;