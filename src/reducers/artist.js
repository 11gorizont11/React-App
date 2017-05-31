import _ from "lodash";
import * as Types from "../constants";
import {MockData} from "./mockdata"

let defaultState;

if (false) {
  defaultState = {
    listArtists: MockData.artists
  };
} else {
  defaultState = {
    listArtists: [],
    artist: {}
  };
}

const artistReducer = (state, { type, ...action }) => {
  if (action.id !== state.id) {
    return state;
  }

  switch (type) {
    case Types.ARTIST_GET_ALL_TRACKS_DONE:
      return {
        ...state,
        status: "loaded"
      };
    default:
      return state;
  }
};

export default (state = defaultState, { type, ...action }) => {
  switch (type) {
    case Types.REQUEST_ALL_ARTISTS_DONE:
      return {
        ...state,
        listArtists: action.listArtists
      };
    case Types.ARTIST_GET_ALL_TRACKS_DONE:
      return {
        ...state,
        artist: action.artist
      };
    default:
      return state;
  }
};

