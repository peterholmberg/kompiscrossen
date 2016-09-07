import {combineReducers} from 'redux';
import Immutable from 'immutable';

function appState(state = Immutable.Map({
}), action = null) {
   switch (action.type) {
      default:
         return state;
   }
}

function standingsState(state = Immutable.Map({

}), action = null) {
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
      content:'Banan vid Sköndal är fixad med ny sträckning för i år.',
      author: 'Peter'

   },{
      id: 1,
      title: 'Ny sida!',
      posted: '2016-08-30',
      edited: '2016-08-31',
      content:'Nu har vi en ny hemsida för kompiscrossen',
      author: 'Peter'

   }],
}), action = null) {
   switch (action.type) {
      default:
         return state;
   }
}

const rootReducer = combineReducers({
   appState,
   standingsState,
   newsState
});

export default rootReducer;