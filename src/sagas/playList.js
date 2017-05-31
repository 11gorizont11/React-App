import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import _ from "lodash";
import * as Constants from "../constants";
import {
  requestPlaylistDone
} from "../actions/playListAction";


function* playListSaga() {
  yield takeEvery(Constants.REQUEST_CREATE_PLAYLIST, create);
  yield takeEvery(Constants.REQUEST_UPDATE_PLAYLIST, update);
}

function* create(action) {
  try {
    const playList = yield call(
      axios,
      {
        method: 'post',
        url: 'api/playlists',
        headers: {
          Accept: "application/json"
        },
        data: {
          "name" : action.playList.name,
          "tracks": action.playList.tracks.reduce((tracks, track)=>{if(tracks.indexOf(track._id)===-1) {
            tracks.push(track._id)
          }
            return tracks
          }, [])
        }
      }
    );
    yield put(requestPlaylistDone(playList.data));
  } catch (e) {
    const status = _.get(e, "response.status");
  }
}

function* update(action) {
  try {
    const playList = yield call(
      axios,
      {
        method: 'put',
        url: 'api/playlists',
        headers: {
          Accept: "application/json"
        },
        params: {
          id: action.playList._id
        },
        data: {
          "name" : action.playList.name,
          "tracks": action.playList.tracks.reduce((tracks, track)=>{if(tracks.indexOf(track._id)===-1) {
            tracks.push(track._id)
          }
            return tracks
          }, [])
        }
      }
    );
    yield put(requestPlaylistDone(playList.data));
  } catch (e) {
    const status = _.get(e, "response.status");
  }
}

export default playListSaga;
