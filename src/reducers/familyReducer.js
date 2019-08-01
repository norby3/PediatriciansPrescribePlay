import {
  CREATE_FAMILY_PROFILE,
  SET_CLINIC_LOCATION,
  SET_CELLPHONE_AND_PASSWORD,
  NEW_ADULT,
  NEW_CHILD,
} from '../actions/types';

const familyState = {};

export default function(state = familyState, action) {
  console.log(`familyReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
  switch(action.type) {
    case CREATE_FAMILY_PROFILE:
      return {
        ...state,
        uuid: action.payload.uuid,
        adultFirstName: action.payload.adultFirstName,
        adultLastName: action.payload.adultLastName,
        childFirstName: action.payload.childFirstName,
        childLastName: action.payload.childLastName,
        hospital: action.payload.hospital,
        doctor: action.payload.doctor,
      }
    case SET_CLINIC_LOCATION:
      return {
        ...state,
        ...action.payload
      };
    case SET_CELLPHONE_AND_PASSWORD:
      return {
        ...state,
        cellphone: action.payload.cellphone,
      };
    case NEW_ADULT:
      return {
        ...state,
        adultFirstName: action.payload.adultFirstName,
        adultLastName: action.payload.adultLastName,
        adultEmail: action.payload.adultEmail,
        adultChildRelationship: action.payload.adultChildRelationship,
      };
    case NEW_CHILD:
      return {
        ...state,
        childFirstName: action.payload.childFirstName,
        childLastName: action.payload.childLastName,
        birthdate: action.payload.birthdate,
        gender: action.payload.gender,
      };
    default:
      return state;
  }
}
