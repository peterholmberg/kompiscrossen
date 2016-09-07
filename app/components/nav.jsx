import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Nav extends Component {
   constructor(props){
      super(props);
   }

   render() {
      return(
         <nav id="navbar" className="navbar navbar-static-top">
            <ul className="nav navbar-nav">
               <li className={this.activeClass('news')}>
                  <IndexLink className="main-nav-item" to="/">Nyheter</IndexLink>
               </li>
               <li className={this.activeClass('races')}>
                  <IndexLink className="main-nav-item" to="/races">Tävlingar</IndexLink>
               </li>
               <li className={this.activeClass('pictures')}>
                  <IndexLink className="main-nav-item" to="/pictures">Bilder</IndexLink>
               </li>
               <li className={this.activeClass('bikes')}>
                  <IndexLink className="main-nav-item" to="/bikes">Cyklarna</IndexLink>
               </li>
               <li className={this.activeClass('about')}>
                  <IndexLink className="main-nav-item" to="/about">Om</IndexLink>
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
