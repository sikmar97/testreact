import React, { useState, useContext } from 'react';
import { UserContext } from '../shared/global/provider/UserProvider'
import './SignInView.css'

export const SignInView = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const login = () => {
        setAuthenticatedUser(username)
    }

    return(
        <div className="profileWrap">
            <div className="inputBox">
                 <span className="inputName">Username: </span> <input onChange={event =>  setUsername(event.target.value)}/><br />
           <span className="inputPass">Password: </span> <input type="password" onChange={event => setPassword(event.target.value)}/> <br />
           <button className="loginButton" onClick={() => login()}>Login</button>
            </div>
          
        </div>
    )

}