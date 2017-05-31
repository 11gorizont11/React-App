import _ from "lodash";
import * as Types from "../constants";

let defaultState = {
    _id: null,
    name: "default",
    tracks: []
};

export default (state = defaultState, { type, ...action }) => {
  switch (type) {
    case Types.ADD_TRACK_TO_PLAYLIST:
      return {
        ...state,
        tracks: state.tracks.indexOf(action.track) !==-1 ?[...state.tracks]:[...state.tracks, action.track]
      };
    case Types.REMOVE_TRACK_FROM_PLAYLIST:
      return {
        ...state,
        tracks: state.tracks.filter(track=>track._id !== action.id)
      };
    case Types.REQUEST_PLAYLIST_DONE:
      return {
        ...state,
        ...action.playList,
      };
    case Types.CHANGE_PLAYLIST_NAME:
      return {
        ...state,
        ...action
      };
    default:
      return state;
  }
};

