import React, {Component, PropTypes} from 'react';
import RaceResultsTile from './race-results-tile';
import {lang} from '../../strings';

export default class RaceResults extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      let {results} = this.props;

      let mensEliteResults = results.filter(result => {
         return result.category === RaceResults.RaceCategories.MensElite;
      });
      let womensEliteResults = results.filter(result => {
         return result.category === RaceResults.RaceCategories.WomenElite;
      });
      let mensBResults = results.filter(result => {
         return result.category === RaceResults.RaceCategories.MensB;
      });
      let womensBResults = results.filter(result => {
         return result.category === RaceResults.RaceCategories.WomensB;
      });
      let youthResults = results.filter(result => {
         return result.category === RaceResults.RaceCategories.Youth;
      });
      return (
         <div className="kc-block">
            {mensEliteResults && mensEliteResults.length > 0 ?
               <RaceResultsTile title={lang.races.resultsTile.mensElite} results={mensEliteResults}/> : null}

            {womensEliteResults && womensEliteResults.length > 0 ?
               <RaceResultsTile title={lang.races.resultsTile.womensElite} results={womensEliteResults}/> : null}

            {mensBResults && mensBResults.length > 0 ?
               <RaceResultsTile title={lang.races.resultsTile.mensB} results={mensBResults}/> : null}

            {womensBResults && womensBResults.length > 0 ?
               <RaceResultsTile title={lang.races.resultsTile.womensB} results={womensBResults}/> : null}
            {youthResults && youthResults.length > 0 ?
               <RaceResultsTile title={lang.races.resultsTile.youth} results={youthResults}/> : null}
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