import _ from "lodash";
import * as Types from "../constants";
import {MockData} from "./mockdata"

let defaultState = {
    name: "default",
    tracks: []
};

export default (state = defaultState, { type, ...action }) => {
  switch (type) {
    case Types.ADD_TRACK_TO_PLAYLIST:
      return {
        ...state,
        tracks: [...state.tracks, action.track]
      };
    case Types.REMOVE_TRACK_FROM_PLAYLIST:
      return {
        ...state,
        tracks: state.tracks.filter(track=>track._id !== action.id)
      };
    default:
      return state;
  }
};

