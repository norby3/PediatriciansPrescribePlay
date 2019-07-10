import {
  NEW_BONUS_SESSION,
} from '../actions/types';

const bonusSessionsState = [];

export default function(state = bonusSessionsState, action) {
  console.log(`bonusSessionsReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
  switch(action.type) {
    case NEW_BONUS_SESSION:
      return state.concat(action.payload);
    default:
      return state;
  }
}
