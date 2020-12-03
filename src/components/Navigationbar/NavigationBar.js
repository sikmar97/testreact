import React, {useContext} from 'react';
import './NavigationBar.css';
import logotype from '../../shared/images/logotype.svg'
import { useHistory } from 'react-router-dom'
import {UserContext} from '../../shared/global/provider/UserProvider'
import {Profile} from '../profile/Profile'

export const NavigationBar = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    
    const displayUserIfAuth = () => {
       return (authenticatedUser) 
        ? <div className="signin"> <Profile/> </div>  
        : <span onClick={()=> history.push('/signin')} className="signin">Sign In</span>
    }

    return(
        <div className="navigationBarWrapper">
            <img onClick={() => history.push('/')} className="logotype" src={logotype} alt="Home"/>
            {displayUserIfAuth()}

        </div>
    )
}

