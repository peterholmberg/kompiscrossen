import React, {Component, PropTypes} from 'react';

export default class RaceResultsTile extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      let {results, title} = this.props;

      return (
         <div className="kc-results-tile">
            <h5>{title}</h5>
            <ol>
               {results.map(result =>
                  <li key={result.riderNo}>
                     {result.name}
                  </li>)}
            </ol>
         </div>
      );
   }
}

RaceResultsTile.propTypes = {
  results: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};