import { fork } from "redux-saga/effects";
import artist from "./artist";

function* rootSaga() {
  yield fork(artist)
}

export default rootSaga