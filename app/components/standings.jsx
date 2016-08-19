import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Standings extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      let standings = [{id: 1, standing: 1, name: 'Peter Holmberg', points: 30},
         {id: 2, standing: 2, name: 'Karl Börjesson', points: 20},
         {id: 3, standing: 3, name: 'Klas Nordentjell', points: 10}];

      return (
         <div className="kc-standings">
            <h4>Ranking</h4>
            <table className="table table-striped table-condensed">
               <thead>
               <tr>
                  <th>Rank</th>
                  <th>Namn</th>
                  <th>Poäng</th>
               </tr>
               </thead>
               <tbody>
               {standings.map(participant => {

                  let {id, standing, name, points} = participant;
                  return (
                     <tr key={id}>
                        <td>{standing}</td>
                        <td>{name}</td>
                        <td style={{textAlign: 'right'}}>{points}</td>
                     </tr>
                  )
               })}
               </tbody>
            </table>
         </div>
      );
   }
}

Standings.propTypes = {
   dispatch: PropTypes.func.isRequired,
   appState: PropTypes.object.isRequired,
   standingsState: PropTypes.object.isRequired
};

function propProvider(reduxState, props) {
   const {appState, standingsState} = reduxState;

   return {
      appState,
      standingsState
   };
}

export default connect(propProvider)(Standings);