import { fork } from "redux-saga/effects";
import artist from "./artist";
import playList from "./playList";

function* rootSaga() {
  yield fork(artist);
  yield fork(playList);
}

export default rootSaga