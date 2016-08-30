import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Bikes extends Component {
   constructor(props){
      super(props);
   }

   render(){
      return(
         <div>
            <img src="http://placekitten.com/400/300"/>
         </div>

      )
   }
}

function propProvider(reduxState, props) {
   const { appState, bikes} = reduxState;

   return {
      appState,
      bikes
   };
}

export default connect(propProvider)(Bikes);