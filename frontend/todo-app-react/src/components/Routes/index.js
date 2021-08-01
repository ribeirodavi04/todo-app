import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavbarCmp from '../NavbarCmp';
const Routes = () => {
    return (
        <BrowserRouter>
            <NavbarCmp/>
            <Switch>
                <Route path="/about">

                </Route>
                <Route path="/">

                </Route>
            </Switch>
        </BrowserRouter>

    );
};

export default Routes;