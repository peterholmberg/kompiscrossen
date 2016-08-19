import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Standings from './standings';

class Root extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
            <h2>Kompiscrysten</h2>
            <Standings />
            <div className="content">
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