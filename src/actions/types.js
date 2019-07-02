
// family Actions
export const SET_GEISINGER_LOCATION = 'SET_GEISINGER_LOCATION';
export const SET_CELLPHONE_AND_PASSWORD = 'SET_CELLPHONE_AND_PASSWORD';

// family & player Actions
export const NEW_ADULT = 'NEW_ADULT';
export const NEW_CHILD = 'NEW_CHILD';
// export const SET_ADULT_INFO = 'SET_ADULT_INFO';
// export const SET_CHILD_INFO = 'SET_CHILD_INFO';

// shared actions for UI data controls
// SET_GEISINGER_LOCATION -> isScreen1GeisingerPatientComplete
// SET_CELLPHONE_AND_PASSWORD -> isScreen2AdultSignupComplete
// NEW_ADULT -> isScreen3AdultInfoComplete
// NEW_CHILD -> isScreen4ChildInfoComplete
//    part of NEW_CHILD ??  export const SET_ONBOARDING_COMPLETE = 'SET_ONBOARDING_COMPLETE';

// player Actions
// replaced by shared actions NEW_ADULT & NEW_CHILD export const NEW_PLAYER = 'NEW_PLAYER';
export const UPDATE_PLAYER_SCORE = 'UPDATE_PLAYER_SCORE';

// session Actions
export const NEW_SESSION = 'NEW_SESSION';
//export const ADD_GAME_TO_SESSION = 'ADD_GAME_TO_SESSION';
export const ADD_PLAYERS_TO_SESSION = 'ADD_PLAYERS_TO_SESSION';
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const COMPLETE_SESSION = 'COMPLETE_SESSION';

// viewControl actions
// set game
export const SET_GAME = 'SET_GAME';
// set players[]
export const SET_PLAYERS = 'SET_PLAYERS';
