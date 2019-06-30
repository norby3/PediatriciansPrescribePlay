import {
  UPDATE_PLAYER_SCORE,
} from './types';


// inputData = uuid, totalScoreZoo: newScore, or totalScorePlay: newScore
export const updatePlayerScore = (inputData) => dispatch => {
  console.log('playerActions.updatePlayerScore');
  dispatch({
    type: UPDATE_PLAYER_SCORE,
    payload: inputData
    // payload: {
    //   uuid: inputData.uuid,
    //   game: inputData.game,
    //   newScore: inputData.newScore
    // },
  });
}
