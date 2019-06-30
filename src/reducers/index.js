import { combineReducers } from 'redux';
import familyReducer from './familyReducer';
import playerReducer from './playerReducer';
import viewControlReducer from './viewControlReducer';
import sessionsReducer from './sessionsReducer';

export default combineReducers({
  family: familyReducer,
  players: playerReducer,
  viewControl: viewControlReducer,
  sessions: sessionsReducer,
});
