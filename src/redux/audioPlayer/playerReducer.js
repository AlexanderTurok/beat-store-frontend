import {
  SET_CURRENT_SONG,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING
} from './playerTypes';

const initialState = {
  currentSong: 0,
  repeat: false,
  isPlaying: false,
  audio: null,
}

function playerReducer(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
        playing: true,
      }
    case TOGGLE_REPEAT:
      return {
        ...state,
        repeat: action.payload,
      }
    case TOGGLE_PLAYING:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      }
    default: return state;
  }
}

export default playerReducer;