import * as types from '../actions/actionTypes';
export default function(state={},action){
  switch(action.type){
    case types.FETCH_VIDEO_SUCCESS:
      console.log('Reducer called '+types.FETCH_VIDEO_SUCCESS,action.payload);
      console.log({...state,...action.payload});
      return {...state,...action.payload};
    default:
      return state;
  }
}
