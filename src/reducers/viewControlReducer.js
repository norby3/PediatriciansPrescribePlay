import {
  SET_GEISINGER_LOCATION,
  SET_CELLPHONE_AND_PASSWORD,
  NEW_ADULT,
  NEW_CHILD,
  SET_GAME,
  SET_PLAYERS,
} from '../actions/types';

const viewControllerState = {
  currentView: 'GeisingerLocation',
  lastView: 'GeisingerLocation',
  isSessionComplete: false,
  isOnboard1GeisingerPatientComplete: false,
  isOnboard2AdultSignupComplete: false,
  isOnboard3AdultInfoComplete: false,
  isOnboard4ChildInfoComplete: false,
  isOnboardComplete: false,
  //game: 'MyZoo',                           // 'Zoo' or 'Play'
  //players: [],
};

export default function(state = viewControllerState, action) {
  console.log(`viewControlReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
  switch(action.type) {
    case SET_GEISINGER_LOCATION:
      return {
        ...state,
        isOnboard1GeisingerPatientComplete: true,
        currentView: 'AdultSignup',
        lastView: 'GeisingerLocation'
      };
    case SET_CELLPHONE_AND_PASSWORD:
      return {
        ...state,
        isOnboard2AdultSignupComplete: true,
        currentView: 'AdultInfo',
        lastView: 'AdultSignup'
      };
    case NEW_ADULT:
      return {
        ...state,
        isOnboard3AdultInfoComplete: true,
        currentView: 'ChildInfo',
        lastView: 'AdultInfo'
      };
    case NEW_CHILD:
      return {
        ...state,
        isOnboard4ChildInfoComplete: true,
        isOnboardComplete: true,
        currentView: 'Home',
        lastView: 'IntroVideo',
      };
    case SET_GAME:
      return {
        ...state,
        game: action.payload.game,
      };
    case SET_PLAYERS:
      return {
        ...state,
        players: action.payload.players,
      };

    // revisit: what about IntroVideo ?
    default:
      return state;
  }
}
