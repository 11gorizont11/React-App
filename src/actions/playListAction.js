import * as Types from "../constants";

export const removeTrackFromPlatList = id =>({
  type: Types.REMOVE_TRACK_FROM_PLAYLIST,
  id
});

export const addTrackToPlayList = track =>({
  type: Types.ADD_TRACK_TO_PLAYLIST,
  track
});