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
      id: 3,
      title: 'Hästpojken',
      posted: '2016-09-13',
      edited: '',
      content: 'Dags för Hästpojken 2016',
      author: '2016'
   }, {
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

function statsState(state = Immutable.Map({}), action = null){
   switch(action.type) {
      default:
         return state;
   }
}

function raceState(state = Immutable.Map({
   races: [{
      id: 4,
      title: '2016 #3',
      description: 'Hästpojken 2016',
      date: '2016-09-18'
   }, {
      id: 3,
      title: '2016 #2',
      description: 'Officiell Kompiscross på söndag 30 aug. Samling 9.30 vid Hästpojken (karta http://kartor.eniro.se/m/0sHro)',
      date: '2016-09-13'
   }, {
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
      }],
   results: [{
      riderNo: 1,
      name: 'Jacob Wihk',
      position: 5,
      points: 1,
      category: 1
   },
      {
         riderNo: 2,
         name: 'Peter Holmberg',
         position: 3,
         points: 3,
         category: 1
      },
      {
         riderNo: 3,
         name: 'Karl Börjesson',
         position: 1,
         points: 5,
         category: 1
      },
      {
         riderNo: 4,
         name: 'Klas Gubbkjelle',
         position: 2,
         points: 4,
         category: 1
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
