import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import RepositoriesList from './components/RepositoriesList'
import TopicsList from './components/TopicsList'
import UsersList from './components/UsersList'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={RepositoriesList} />
            <Route path='/topics' component={TopicsList} />
            <Route path='/users' component={UsersList} />
        </Switch>
    </BrowserRouter>
    
)

export default Router