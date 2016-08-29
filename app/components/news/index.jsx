import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class News extends Component {
   constructor(props){
      super(props);
   }

   render(){
      return(
         <div>Nyheter</div>
      )
   }
}

function propProvider(reduxState, props) {
   const { appState, news } = reduxState;

   return {
      appState,
      news
   };
}

export default connect(propProvider)(News);