import {
  NEW_ADULT,
  NEW_CHILD,
  UPDATE_TOTAL_SCORE_ZOO,
  UPDATE_TOTAL_SCORE_PLAY,
  ADD_PLAYER
} from '../actions/types';

const playersState = [];

export default function(state = playersState, action) {
  console.log(`playerReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
  switch(action.type) {
    case ADD_PLAYER:
      return state.concat({
        name: action.payload.name,
        uuid: action.payload.uuid,
        totalScoreZoo: 1,
        totalScorePlay: 0,
        totalMyPlayVideosWatched: 0,
      });

    // case NEW_ADULT:
    //   console.log(`playerReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
    //   let newPlayerAdult = {
    //     name: action.payload.adultFirstName,
    //     uuid: action.payload.uuid,
    //     totalScoreZoo: 1,
    //     totalScorePlay: 0
    //   };
    //   return state.concat(newPlayerAdult);
    case NEW_CHILD:
      console.log(`playerReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
      let newPlayerChild = {
        name: action.payload.childFirstName,
        uuid: action.payload.uuid,
        totalScoreZoo: 1,
        totalScorePlay: 0,
        totalMyPlayVideosWatched: 0,
      };
      return state.concat(newPlayerChild);

    case UPDATE_TOTAL_SCORE_ZOO:
      console.log(`playerReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
      return state.map((item, index) => {
        // Find the item with the matching name
        if(item.name === action.payload.name) {
          // Return a new object
          return {
            ...item,  // copy the existing item
            totalScoreZoo: item.totalScoreZoo + action.payload.totalScoreZoo
          }
        }
        // Leave every other item unchanged
        return item;
      });

    case UPDATE_TOTAL_SCORE_PLAY:
      console.log(`playerReducer state = ${JSON.stringify(state)} action = ${JSON.stringify(action)}`);
      return state.map((item, index) => {
        // Find the item with the matching name
        if(item.name === action.payload.name) {
          // Return a new object
          return {
            ...item,  // copy the existing item
            totalScorePlay: item.totalScorePlay + action.payload.totalScorePlay,
            totalMyPlayVideosWatched: item.totalMyPlayVideosWatched + 1
          }
        }
        // Leave every other item unchanged
        return item;
      });

    default:
      return state;
  }
}
