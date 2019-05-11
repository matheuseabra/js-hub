import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import RepositoriesList from './components/RepositoriesList'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={RepositoriesList} />
        </Switch>
    </BrowserRouter>
    
)

export default Router