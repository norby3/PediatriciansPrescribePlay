import {
  NEW_SESSION,
  ADD_PLAYERS_TO_SESSION,
  UPDATE_SESSION,
  COMPLETE_SESSION,
} from './types';


export const newSession = (inputData) => dispatch => {
  //console.log('sessionActions.newSession');
  dispatch({
    type: NEW_SESSION,
    payload: inputData
  });
}

export const addPlayersToSession = (inputData) => dispatch => {
  //console.log('sessionActions.addPlayersToSession');
  dispatch({
    type: ADD_PLAYERS_TO_SESSION,
    payload: inputData
  });
}

export const updateSession = (inputData) => dispatch => {
  //console.log('sessionActions.updateSession');
  dispatch({
    type: UPDATE_SESSION,
    payload: inputData
  });
}

export const completeSession = (inputData) => dispatch => {
  //console.log('sessionActions.completeSession');
  dispatch({
    type: COMPLETE_SESSION,
    payload: inputData
  });
}
