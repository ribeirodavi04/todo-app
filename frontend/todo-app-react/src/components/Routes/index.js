import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AboutUS from '../AboutUs';
import Home from '../Home';
import NavbarCmp from '../NavbarCmp';
const Routes = () => {
    return (
        <BrowserRouter>
            <NavbarCmp/>
            <Switch>
                <Route path="/aboutus">
                    <AboutUS/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>

    );
};

export default Routes;