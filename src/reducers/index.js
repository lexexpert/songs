import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: 'No title', duration: '4:05' },
    { title: 'Macarena', duration: '3:45' },
    { title: 'All stars', duration: '2:37' },
  ]
};

const selectedSongReducer = ( selectedSong=null, action ) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
