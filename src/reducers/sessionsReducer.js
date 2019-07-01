import {
  NEW_SESSION,
  ADD_PLAYERS_TO_SESSION,
  UPDATE_GAME_STATUS_IN_SESSION,
} from '../actions/types';

const sessionsState = [];

export default function(state = sessionsState, action) {
  console.log(`sessionsReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
  switch(action.type) {
    case NEW_SESSION:
      console.log(`sessionsReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
      return {
        ...state,
        ...action.payload
      };
    case ADD_PLAYERS_TO_SESSION:
      console.log(`sessionsReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
      let stateCopy = [...state];
      let currentSession = stateCopy.pop();
      currentSession = {
        ...currentSession,
        players: action.payload
      };
      return stateCopy.concat(currentSession);

    // case NEW_ADULT:
    //   return {
    //     ...state,
    //     adultFirstName: action.payload.adultFirstName,
    //     adultLastName: action.payload.adultLastName,
    //     adultEmail: action.payload.adultEmail,
    //     adultChildRelationship: action.payload.adultChildRelationship,
    //   };
    // case NEW_CHILD:
    //   return {
    //     ...state,
    //     childFirstName: action.payload.childFirstName,
    //     childLastName: action.payload.childLastName,
    //     birthdate: action.payload.birthdate,
    //     gender: action.payload.gender,
    //   };
    default:
      return state;
  }
}
