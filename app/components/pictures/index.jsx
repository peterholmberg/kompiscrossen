import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Pictures extends Component {
   constructor(props){
      super(props);
   }

   render(){
      return(
         <div>
            <img src="http://placekitten.com/300/300"/>
         </div>

      )
   }
}

function propProvider(reduxState, props) {
   const { appState, pictures } = reduxState;

   return {
      appState,
      pictures
   };
}

export default connect(propProvider)(Pictures);