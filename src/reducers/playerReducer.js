import {
  NEW_ADULT,
  NEW_CHILD,
  //UPDATE_PLAYER_SCORE,
} from '../actions/types';

const playersState = [];

export default function(state = playersState, action) {
  console.log(`playerReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
  switch(action.type) {
    case NEW_ADULT:
      console.log(`playerReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
      let newPlayerAdult = {
        name: action.payload.adultFirstName,
        uuid: action.payload.uuid,
        totalScoreZoo: 1,
        totalScorePlay: 0
      };
      return state.concat([], newPlayerAdult);
      console.log('debug alpha');
    case NEW_CHILD:
      console.log(`playerReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
      let newPlayerChild = {
        name: action.payload.childFirstName,
        uuid: action.payload.uuid,
        totalScoreZoo: 1,
        totalScorePlay: 0
      };
      return state.concat(state, newPlayerChild);
      console.log('debug bravo');

    default:
      return state;
  }
}
