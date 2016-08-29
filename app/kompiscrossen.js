import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import Root from './components/root'
import {Provider} from 'react-redux';
import configureStore from './configure-store';
import News from './components/news';

document.addEventListener('DOMContentLoaded', () => {
   ReactDOM.render(
      <Provider store={configureStore()}>
         <Router history={hashHistory}>
            <Route path='/' component={Root}>
               <IndexRedirect to='/news'/>
               <Route path='/news' component={News}/>
            </Route>
         </Router>
      </Provider>,
      document.getElementById('kompiscrossen')
   );
});