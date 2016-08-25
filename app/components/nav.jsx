import React, { Component, PropTypes } from 'react';

export default class Nav extends Component {
   constructor(props){
      super(props);
   }

   render() {
      return(
         <nav id="navbar" className="navbar navbar-static-top">
            <ul className="nav navbar-nav">
               <li>
                  <a href="" className="main-nav-item"> Hem</a>
               </li>
               <li>
                  <a href="" className="main-nav-item">Tävlingar</a>
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
