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
               <li>
                  <IndexLink className="main-nav-item" to="/">Nyheter</IndexLink>
               </li>
               <li>
                  <IndexLink className="main-nav-item" to="/races">Tävlingar</IndexLink>
               </li>
               <li>
                  <IndexLink className="main-nav-item" to="/pictures">Bilder</IndexLink>
               </li>
               <li>
                  <IndexLink className="main-nav-item" to="/bikes">Cyklarna</IndexLink>
               </li>
               <li>
                  <IndexLink className="main-nav-item" to="/about">Om</IndexLink>
               </li>
            </ul>
         </nav>
      );
   }
}
