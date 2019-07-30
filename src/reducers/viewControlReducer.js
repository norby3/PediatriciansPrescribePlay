import {
  FINISHED_INTRO_VIDEO,
  SET_CLINIC_LOCATION,
  SET_CELLPHONE_AND_PASSWORD,
  NEW_ADULT,
  NEW_CHILD,
  SET_GAME,
  SET_PLAYERS,
  INCREMENT_ACTIVITY_VIDEO_INDEX,
  INCREMENT_GIF_CELEBRATION_INDEX,
  COMPLETE_SESSION,
} from '../actions/types';

const viewControlState = {
  isIntroVideoComplete: false,
  currentView: 'IntroVideo',
  lastView: 'IntroVideo',
  isSessionComplete: false,
  isOnboard1ClinicLocationComplete: false,
  //isOnboard2AdultSignupComplete: false,
  isOnboard3AdultInfoComplete: false,
  isOnboard4ChildInfoComplete: false,
  isOnboardComplete: false,
  activityVideoIndex: 0,                     // 0 to 5
  gifCelebrationIndex: 0,
  //game: 'MyZoo',                           // 'Zoo' or 'Play'
  //players: [],
};

export default function(state = viewControlState, action) {
  console.log(`viewControlReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
  switch(action.type) {
    case FINISHED_INTRO_VIDEO:
      return {
        ...state,
        isIntroVideoComplete: true,
        currentView: 'Home',
        lastView: 'IntroVideo'
      };
    case SET_CLINIC_LOCATION:
      return {
        ...state,
        isOnboard1ClinicLocationComplete: true,
        currentView: 'AdultInfo',
        lastView: 'ClinicLocation'
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
    case INCREMENT_ACTIVITY_VIDEO_INDEX:
      let aVI = state.activityVideoIndex + 1;
      if(aVI >= 6) { aVI = 0 };
      return {
        ...state,
        activityVideoIndex: aVI,
      };
    case INCREMENT_GIF_CELEBRATION_INDEX:
      let gCI = state.activityVideoIndex + 1;
      if(gCI >= 9) { gCI = 0 };
      return {
        ...state,
        gifCelebrationIndex: gCI,
      };
    case COMPLETE_SESSION:
      return {
        ...state,
        lastSessionCompletedAtLocalTimezone: action.payload.finishedAtLocalTimezone,
        lastSessionCompletedAtUTC: action.payload.finishedAtUTC,
        lastSessionCompletedAtMillis: action.payload.finishedAtMillis
      };
    default:
      return state;
  }
}
