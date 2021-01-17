import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import BookStore from '../pages/book-store';
import Order from '../pages/order';
import AppHeader from '../pages/app-header';
import PageNotFound from '../pages/page-not-found';

import {Route, Switch} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <AppHeader/>
            <Switch>
                <Route path='/' exact>
                    <BookStore/>
                    <Order/>
                </Route>
                <Route path='/cart'>
                    <Order/>
                </Route>
                <Route>
                    <PageNotFound/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
