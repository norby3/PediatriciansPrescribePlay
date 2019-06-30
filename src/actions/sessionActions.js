import {
  NEW_SESSION,
  //ADD_PLAYERS_TO_SESSION,
  //UPDATE_GAME_STATUS_IN_SESSION,
} from './types';


export const newSession = (inputData) => dispatch => {
  console.log('sessionActions.newSession');
  dispatch({
    type: NEW_SESSION,
    payload: inputData
  });
}

// export const setCellphoneAndPassword = (inputData) => dispatch => {
//   console.log('familyActions.setCellphoneAndPassword');
//   dispatch({
//     type: SET_CELLPHONE_AND_PASSWORD,
//     payload: {
//       cellphone: inputData.cellphone,
//       password: inputData.password,
//     },
//   });
// }
//
// export const newAdult = (inputData) => dispatch => {
//   console.log('familyActions.newAdult');
//   dispatch({
//     type: NEW_ADULT,
//     payload: inputData
//   });
// }
//
// export const newChild = (inputData) => dispatch => {
//   console.log('familyActions.newChild');
//   dispatch({
//     type: NEW_CHILD,
//     payload: inputData
//   });
// }
