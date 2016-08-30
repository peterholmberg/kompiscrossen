import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import Root from './components/root'
import {Provider} from 'react-redux';
import configureStore from './configure-store';
import News from './components/news';
import Races from './components/races';
import Pictures from './components/pictures';
import Bikes from './components/bikes';
import About from './components/about';

document.addEventListener('DOMContentLoaded', () => {
   ReactDOM.render(
      <Provider store={configureStore()}>
         <Router history={hashHistory}>
            <Route path='/' component={Root}>
               <IndexRedirect to='/news'/>
               <Route path='/news' component={News}/>
               <Route path='/races' component={Races}/>
               <Route path='/pictures' component={Pictures}/>
               <Route path='/bikes' component={Bikes}/>
               <Route path='/about' component={About}/>
            </Route>
         </Router>
      </Provider>,
      document.getElementById('kompiscrossen')
   );
});