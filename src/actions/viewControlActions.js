import {
  FINISHED_INTRO_VIDEO,
  SET_GAME,
  SET_PLAYERS,
  INCREMENT_ACTIVITY_VIDEO_INDEX,
  INCREMENT_GIF_CELEBRATION_INDEX,
} from './types';

export const finishedIntroVideo = (inputData) => dispatch => {
  dispatch({
    type: FINISHED_INTRO_VIDEO,
    payload: inputData
  });
}

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

export const incrementActivityVideoIndex = (inputData) => dispatch => {
  dispatch({
    type: INCREMENT_ACTIVITY_VIDEO_INDEX,
    //payload: inputData
  });
}
export const incrementGifCelebrationIndex = (inputData) => dispatch => {
  dispatch({
    type: INCREMENT_GIF_CELEBRATION_INDEX,
    //payload: inputData
  });
}
