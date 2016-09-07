import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { lang } from '../strings';

export default class Nav extends Component {
   constructor(props){
      super(props);
   }

   render() {
      return(
         <nav id="navbar" className="navbar navbar-static-top">
            <ul className="nav navbar-nav">
               <li className={this.activeClass('news')}>
                  <IndexLink className="main-nav-item" to="/">{lang.nav.news}</IndexLink>
               </li>
               <li className={this.activeClass('races')}>
                  <IndexLink className="main-nav-item" to="/races">{lang.nav.races}</IndexLink>
               </li>
               <li className={this.activeClass('pictures')}>
                  <IndexLink className="main-nav-item" to="/pictures">{lang.nav.pictures}</IndexLink>
               </li>
               <li className={this.activeClass('bikes')}>
                  <IndexLink className="main-nav-item" to="/bikes">{lang.nav.bikes}</IndexLink>
               </li>
               <li className={this.activeClass('about')}>
                  <IndexLink className="main-nav-item" to="/about">{lang.nav.about}</IndexLink>
               </li>
            </ul>
         </nav>
      );
   }

   activeClass(routeName) {
      return this.context.router.isActive(routeName, false) ? 'current-page-item' : null;
   }
}

Nav.contextTypes = {
   router: PropTypes.object.isRequired
};
