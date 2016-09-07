import React, { Component, PropTypes } from 'react';
import { lang } from '../strings';

export default class About extends Component {
   constructor(props){
      super(props);
   }

   render(){
      return(
         <div>
            <h3>{lang.about.title}</h3>
            <p>{lang.about.content}</p>
         </div>
      )
   }
}