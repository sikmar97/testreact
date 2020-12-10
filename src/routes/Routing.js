import React, {useContext, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HomePage} from '../view/HomePage';
import { SignInView } from '../view/SignInView';
import {UserContext} from '../shared/global/provider/UserProvider';



export const Routing = (props) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    
    const checkIfUerIsAuthetincatedInBrower = () => {
         setAuthenticatedUser(localStorage.getItem('username'))
    }

    useEffect(() =>{
        checkIfUerIsAuthetincatedInBrower()
    },[])

    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/signin" component={SignInView}/>
                <Route component={HomePage} />
            </Switch>
        </Router>
    )
}