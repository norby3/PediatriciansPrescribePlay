import {
  NEW_BONUS_SESSION,
} from './types';


export const newBonusSession = (inputData) => dispatch => {
  //console.log('sessionActions.newSession');
  dispatch({
    type: NEW_BONUS_SESSION,
    payload: {
      danceName: inputData.danceName,
      youTubeId: inputData.youTubeId,
      createdAtLocalTimezone: inputData.createdAtLocalTimezone,
     }
  });
}
