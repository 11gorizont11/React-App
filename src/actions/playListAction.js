import * as Types from "../constants";

export const removeTrackFromPlatList = id =>({
  type: Types.REMOVE_TRACK_FROM_PLAYLIST,
  id
});

export const addTrackToPlayList = track =>({
  type: Types.ADD_TRACK_TO_PLAYLIST,
  track
});

export const requestCreatePlaylist = (playList)=>({
  type: Types.REQUEST_CREATE_PLAYLIST,
  playList,
});

export const requestUpdatePlaylist = (playList)=>({
  type: Types.REQUEST_UPDATE_PLAYLIST,
  playList,
});

export const requestPlaylistDone = playList =>({
  type: Types.REQUEST_PLAYLIST_DONE,
  playList
});

export const savePlaylistName = name =>({
  type: Types.CHANGE_PLAYLIST_NAME,
  name : name
});