import {
  UPDATE_TOTAL_SCORE_ZOO,
  UPDATE_TOTAL_SCORE_PLAY,
} from './types';


// inputData = uuid, totalScoreZoo: newScore, or totalScorePlay: newScore
export const updateTotalScoreZoo = (inputData) => dispatch => {
  console.log('playerActions.updateTotalScoreZoo');
  dispatch({
    type: UPDATE_TOTAL_SCORE_ZOO,
    //payload: inputData
    payload: {
      name: inputData.name,
      totalScoreZoo: inputData.totalScoreZoo
    },
  });
}

export const updateTotalScorePlay = (inputData) => dispatch => {
  console.log('playerActions.updateTotalScorePlay');
  dispatch({
    type: UPDATE_TOTAL_SCORE_PLAY,
    //payload: inputData
    payload: {
      name: inputData.name,
      totalScorePlay: inputData.totalScorePlay
    },
  });
}
