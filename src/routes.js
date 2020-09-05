import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Recipe from './pages/Recipe';
import LandingPage from './pages/LandingPage';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/receitas" exact component={Home} />
                <Route path="/receita/:recipe" component={Recipe} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </BrowserRouter>
    );
}