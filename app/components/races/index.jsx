import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {lang} from '../../strings';
import {RaceList} from './race-list';

class Races extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      let {raceState} = this.props;
      let {races} = raceState.toJS();
      return (
         <div>
            <div className="kc-race-info">
               <h4>{lang.races.course.title}</h4>
               <div className="kc-race-map">
                  <img src="http://placekitten.com/500/400"/>
               </div>
            </div>
            <div className="kc-race-list">
               <h4>{lang.races.race}</h4>
               <RaceList races={races}/>
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