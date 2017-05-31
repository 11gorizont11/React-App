import * as Types from "../constants";

export const requestAllArtists = () => ({
  type: Types.REQUEST_ALL_ARTISTS
});

export const requestAllArtistsDone = (listArtists) => ({
  type: Types.REQUEST_ALL_ARTISTS_DONE,
  listArtists,
});

export const getAllArtistTrack = id =>({
  type: Types.ARTIST_GET_ALL_TRACKS,
  id
});

export const getAllArtistTrackDone = artist =>({
  type: Types.ARTIST_GET_ALL_TRACKS_DONE,
  artist
});