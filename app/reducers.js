import {combineReducers} from 'redux';
import Immutable from 'immutable';

function appState(state = Immutable.Map({}), action = null) {
   switch (action.type) {
      default:
         return state;
   }
}

function standingsState(state = Immutable.Map({}), action = null) {
   switch (action.type) {
      default:
         return state;
   }
}

function newsState(state = Immutable.Map({
   news: [{
      id: 2,
      title: 'Krossäsongen är igång!',
      posted: '2016-09-06',
      edited: '2016-09-07',
      content: 'Banan vid Sköndal är fixad med ny sträckning för i år.',
      author: 'Peter'

   }, {
      id: 1,
      title: 'Ny sida!',
      posted: '2016-08-30',
      edited: '2016-08-31',
      content: 'Nu har vi en ny hemsida för kompiscrossen',
      author: 'Peter'

   }],
}), action = null) {
   switch (action.type) {
      default:
         return state;
   }
}

function raceState(state = Immutable.Map({
   races: [{
      id: 3,
      title: '2016 #2',
      description: 'Officiell Kompiscross på söndag 30 aug. Samling 9.30 vid Hästpojken (karta http://kartor.eniro.se/m/0sHro)',
      date: '2016-09-13'
   },{
      id: 2,
      title: '2016 #1',
      description: 'Årets första deltävling',
      date: '2016-09-06'
   },
      {
         id: 1,
         title: 'Första testet av nya banan',
         description: 'Jobbigt, stötigt och brötigt',
         date: '2016-09-04'
      }]
}), action = null) {
   switch (action.type) {
      default:
         return state;
   }
}

const rootReducer = combineReducers({
   appState,
   standingsState,
   newsState,
   raceState
});

export default rootReducer;