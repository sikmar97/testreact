import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HomePage} from '../view/HomePage';
import { SignInView } from '../view/SignInView';

export const Routing = (props) => {
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