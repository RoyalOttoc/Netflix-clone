import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from 'Routes/Home'
import TV from 'Routes/TV'
import Search from 'Routes/Search'

// eslint-disable-next-line
export default () => (
    <Router>
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/tv' component={TV}></Route>
            <Route path='/search' component={Search}></Route>
            <Redirect from='*' to='/'></Redirect>
        </Switch>
    </Router>
)
