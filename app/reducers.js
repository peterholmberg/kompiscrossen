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

const rootReducer = combineReducers({
   appState,
   standingsState
});

export default rootReducer;