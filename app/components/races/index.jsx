import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {lang} from '../../strings';

class Races extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      let {raceState} = this.props;
      let {races} = raceState.toJS();
      return (
         <div className="kc-race-map">
            <div>
               <h4>Banan</h4>
            </div>
            <div className="kc-race-list">
               <h4>{lang.races.race}</h4>
               <div className="list-group">
                  {races.map(race =>
                     <a href="#" className="list-group-item" key={race.id}>
                        <h4>{race.title}</h4>
                        <p>{race.description}</p>
                     </a>
                  )}
               </div>
            </div>
            <div className="kc-race-standings">
            </div>
         </div>
      )
   }
}

function propProvider(reduxState, props) {
   const {appState, raceState} = reduxState;

   return {
      appState,
      raceState
   };
}

export default connect(propProvider)(Races);