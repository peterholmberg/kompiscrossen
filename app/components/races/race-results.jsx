import React, {Component, PropTypes} from 'react';

export default class RaceResults extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      let {results} = this.props;
      let mensEliteResults = results.filter(result => {return result.category === RaceResults.RaceCategories.MensElite;});
      return (
         <div>
            {mensEliteResults && mensEliteResults.length > 0 ?
               <div className="kc-results-tile">
                  <ul>
                     {mensEliteResults.map(result =>
                        <li>
                           {result.name}
                        </li>)}
                  </ul>
               </div> : null}
         </div>
      );
   }
}

RaceResults.RaceCategories = {
   MensElite: 1,
   WomenElite: 2,
   MensB: 3,
   WomensB: 4,
   Youth: 5
};

RaceResults.propTypes = {
   results: PropTypes.array.isRequired
};