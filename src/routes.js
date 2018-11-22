import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './src/components/Main/index';

export default const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Main} />
        </Switch>
    </BrowserRouter>
    
)