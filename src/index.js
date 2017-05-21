import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './app'
import Home from './containers/home'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './store'

import style from './sass/style.scss'

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
        </Route>
    </Router>
);

render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
)
