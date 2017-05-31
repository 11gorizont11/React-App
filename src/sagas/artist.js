import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import _ from "lodash";
import * as Constants from "../constants";
import {
  requestAllArtistsDone,
  getAllArtistTrackDone
} from "../actions/artistAction";


function* artistSaga() {
  yield takeEvery(Constants.REQUEST_ALL_ARTISTS, loadAll);
  yield takeEvery(Constants.ARTIST_GET_ALL_TRACKS, loadArtistTracks)
}

function* loadAll() {
  try {
    const artists = yield call(
      axios.get,
      'api/artists',
      {
        headers: {
          Accept: "application/json"
        }
      }
    );
    yield put(requestAllArtistsDone(artists.data));
  } catch (e) {
    const status = _.get(e, "response.status");
  }
}

function* loadArtistTracks(action) {
  try {
    const artist = yield call(
      axios.get,
      `api/artists/${action.id}`,
      {
        headers: {
          Accept: "application/json"
        }
      }
    );
    yield put(getAllArtistTrackDone(artist.data));
  }
  catch (e) {
    const status = _.get(e, "response.status");
  }
}
export default artistSaga;