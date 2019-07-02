import {
  SET_GAME,
  SET_PLAYERS,
} from './types';


export const setGame = (inputData) => dispatch => {
  dispatch({
    type: SET_GAME,
    payload: inputData
  });
}

export const setPlayers = (inputData) => dispatch => {
  dispatch({
    type: SET_PLAYERS,
    payload: inputData
  });
}
