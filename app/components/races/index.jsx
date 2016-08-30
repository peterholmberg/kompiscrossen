import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Races extends Component {
   constructor(props){
      super(props);
   }

   render(){
      return(
         <div>Tävlingar</div>
      )
   }
}

function propProvider(reduxState, props) {
   const { appState, races } = reduxState;

   return {
      appState,
      races
   };
}

export default connect(propProvider)(Races);