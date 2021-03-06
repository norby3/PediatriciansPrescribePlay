import {
  CREATE_FAMILY_PROFILE,
  SET_CLINIC_LOCATION,
  SET_CELLPHONE_AND_PASSWORD,
  NEW_ADULT,
  NEW_CHILD,
} from './types';

export const createFamilyProfile = (inputData) => dispatch => {
  console.log('familyActions.createFamilyProfile');
  dispatch({
    type: CREATE_FAMILY_PROFILE,
    payload: {
      uuid: inputData.uuid, 
      adultFirstName: inputData.adultFirstName,
      adultLastName: inputData.adultLastName,
      childFirstName: inputData.childFirstName,
      childLastName: inputData.childLastName,
      hospital: inputData.hospital,
      doctor: inputData.doctor,
    },
  });
}

export const setClinicLocation = (inputData) => dispatch => {
  console.log('familyActions.setClinicLocation');
  dispatch({
    type: SET_CLINIC_LOCATION,
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
