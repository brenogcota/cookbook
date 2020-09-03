import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Recipe from './pages/Recipe';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/receita/:recipe" component={Recipe} />
            </Switch>
        </BrowserRouter>
    );
}