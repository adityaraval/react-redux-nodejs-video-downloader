import axios from 'axios';
import * as types from './actionTypes';
const BASE_URL = 'http://localhost:8080/api';


export function getVideoDetails(url){
const URL = `${BASE_URL}/get?video_url=${url}`;
const request = axios.get(URL);
console.log('Action creator for '+types.FETCH_VIDEO_SUCCESS);
return{
  type:types.FETCH_VIDEO_SUCCESS,
  payload:request
  }
}
