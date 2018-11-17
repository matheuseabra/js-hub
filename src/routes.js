import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './src/components/Main/index';
import Main from './src/components/ProductDetail/index';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Main} />
            <Route path='/details' component={D} />
        </Switch>
    </BrowserRouter>
    
)