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