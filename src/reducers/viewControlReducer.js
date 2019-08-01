import {
  FINISHED_INTRO_VIDEO,
  SET_GAME,
  SET_PLAYERS,
  INCREMENT_ACTIVITY_VIDEO_INDEX,
  INCREMENT_GIF_CELEBRATION_INDEX,
  COMPLETE_SESSION,
  CREATE_FAMILY_PROFILE,
} from '../actions/types';

const viewControlState = {
  isIntroVideoComplete: false,
  currentView: 'IntroVideo',
  lastView: 'IntroVideo',
  isSessionComplete: false,
  activityVideoIndex: 0,                     // 0 to 5
  gifCelebrationIndex: 0,
  //game: 'MyZoo',                           // 'Zoo' or 'Play'
  //players: [],
  shareDataWithDoc: false,
  familyProfileComplete: false,
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
    case CREATE_FAMILY_PROFILE:
      return {
        ...state,
        shareDataWithDoc: true,
        familyProfileComplete: true
      };
    default:
      return state;
  }
}
