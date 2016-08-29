import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Standings from './standings';
import Nav from './nav';

class Root extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="kc-content-holder">
            <h2 className="kc-logo">Kompiscrossen</h2>
            <div className="kc-sidebar">
               <Standings />
            </div>
            <Nav />
            <div className="kc-page-content">
               {this.props.children}
            </div>
         </div>
      );
   }
}

Root.propTypes = {
   dispatch: PropTypes.func.isRequired,
   appState: PropTypes.object.isRequired
};

function propProvider(reduxState, props) {
   const {appState} = reduxState;

   return {
      appState
   };
}

export default connect(propProvider)(Root);