import {
  UPDATE_TOTAL_SCORE_ZOO,
  UPDATE_TOTAL_SCORE_PLAY,
  ADD_PLAYER,
} from './types';

// inputData = uuid, totalScoreZoo: newScore, or totalScorePlay: newScore
export const updateTotalScoreZoo = (inputData) => dispatch => {
  //console.log(`playerActions.updateTotalScoreZoo inputData: ${JSON.stringify(inputData)}`);
  dispatch({
    type: UPDATE_TOTAL_SCORE_ZOO,
    payload: {
      name: inputData.name,
      totalScoreZoo: inputData.totalScoreZoo
    },
  });
}

export const updateTotalScorePlay = (inputData) => dispatch => {
  //console.log(`playerActions.updateTotalScorePlay inputData: ${JSON.stringify(inputData)}`);
  dispatch({
    type: UPDATE_TOTAL_SCORE_PLAY,
    payload: {
      name: inputData.name,
      totalScorePlay: inputData.totalScorePlay
    },
  });
}

export const addPlayer = (inputData) => dispatch => {
  //console.log(`playerActions.addPlayer inputData: ${JSON.stringify(inputData)}`);
  dispatch({
    type: ADD_PLAYER,
    payload: {
      name: inputData.name,
      uuid: inputData.uuid
    },
  });
}
