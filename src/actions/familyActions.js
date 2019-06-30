import {
  SET_GEISINGER_LOCATION,
  SET_CELLPHONE_AND_PASSWORD,
  NEW_ADULT,
  NEW_CHILD,
} from './types';

export const setGeisingerLocation = (inputData) => dispatch => {
  console.log('familyActions.setGeisingerLocation');
  dispatch({
    type: SET_GEISINGER_LOCATION,
    payload: inputData
  });
}

export const setCellphoneAndPassword = (inputData) => dispatch => {
  console.log('familyActions.setCellphoneAndPassword');
  dispatch({
    type: SET_CELLPHONE_AND_PASSWORD,
    payload: {
      cellphone: inputData.cellphone,
      password: inputData.password,
    },
  });
}

export const newAdult = (inputData) => dispatch => {
  console.log('familyActions.newAdult');
  dispatch({
    type: NEW_ADULT,
    payload: inputData
  });
}

export const newChild = (inputData) => dispatch => {
  console.log('familyActions.newChild');
  dispatch({
    type: NEW_CHILD,
    payload: inputData
  });
}
