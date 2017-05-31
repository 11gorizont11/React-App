import React, {PureComponent} from "react";
import {connect} from "react-redux";
import _ from "lodash";
import { bindActionCreators } from "redux";
import {Alert, FormGroup, FormControl} from "react-bootstrap"
import {removeTrackFromPlatList} from "../../actions/playListAction";

class PlayList extends PureComponent{
  render() {
    const {playList, removeTrackFromPlatList} = this.props;
    return  <div className="playlist">
        <h2>{playList.name} Playlist</h2>
        {playList.tracks.length > 0
          ?<ul className="track-list">
            {
              playList.tracks.map(track => <li key={track._id} className="track">
                {track.name} &nbsp;
                <i className="fa fa-minus-square" onClick={()=>removeTrackFromPlatList(track._id)}/>
              </li>)
            }
            <li><button className="btn btn-save">save</button></li>
          </ul>
          : <div className="wrapper">
            <div className="inner">
              <Alert bsStyle="info">
                Add tracks to playlist
              </Alert>
            </div>
          </div>}
    </div>
  }
}
const mapStateToProps = state => ({
  playList: state.playList
});

const mapDispatchTopProps = dispatch => bindActionCreators({removeTrackFromPlatList}, dispatch);

export default connect(mapStateToProps, mapDispatchTopProps)(PlayList);