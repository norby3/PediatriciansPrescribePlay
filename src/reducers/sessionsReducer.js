import {
  NEW_SESSION,
  ADD_PLAYERS_TO_SESSION,
  UPDATE_SESSION,
  COMPLETE_SESSION,
} from '../actions/types';

const sessionsState = [];

export default function(state = sessionsState, action) {
  console.log(`sessionsReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
  switch(action.type) {
    case NEW_SESSION:
      return state.concat(action.payload);
    case ADD_PLAYERS_TO_SESSION:
      let stateCopy = [...state];
      let currentSession = stateCopy.pop();
      currentSession = {
        ...currentSession,
        players: action.payload
      };
      return stateCopy.concat(currentSession);
    case UPDATE_SESSION:
      let stateCopy2 = [...state];
      let currentSession2 = stateCopy2.pop();
      currentSession2 = {
        ...currentSession2,
        ...action.payload
      };
      return stateCopy2.concat(currentSession2);
    case COMPLETE_SESSION:
      let stateCopy3 = [...state];
      let currentSession3 = stateCopy3.pop();
      currentSession3 = {
        ...currentSession3,
        ...action.payload
      };
      return stateCopy3.concat(currentSession3);

    default:
      return state;
  }
}
