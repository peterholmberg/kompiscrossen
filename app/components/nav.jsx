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
                  <a href="" className="main-nav-item">Tävlingar</a>
               </li>
               <li>
                  <a href="" className="main-nav-item">Bilder</a>
               </li>
               <li>
                  <a href="" className="main-nav-item">Cyklarna</a>
               </li>
               <li>
                  <a href="" className="main-nav-item">Om</a>
               </li>
            </ul>
         </nav>
      );
   }
}
