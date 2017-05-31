import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";
import Artist from "./artist";
import PlayList from "./playlist";

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  artists: Artist,
  playList: PlayList
});