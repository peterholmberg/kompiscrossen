import React, {Component, PropTypes} from 'react';

export default class RaceList extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      let {races} = this.props;

      return (
         <div className="list-group">
            {races.map(race =>
               <a href="#" className="list-group-item" key={race.id} onClick={this.handleClick}>
                  <h4>{race.title}</h4>
                  <p>{race.description}</p>
               </a>
            )}
         </div>
      )
   }

   handleClick = ev => {
      ev.preventDefault();
   };
}

RaceList.propTypes = {
   races: PropTypes.array.isRequired
};