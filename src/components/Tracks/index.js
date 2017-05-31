import React from "react";
import {connect} from "react-redux";
import _ from "lodash";
import { bindActionCreators } from "redux";
import {Alert} from "react-bootstrap"
import {addTrackToPlayList} from "../../actions/playListAction"

const Tracks = props =>{
  const {artist, addTrackToPlayList} = props;
  return (
      !_.isEmpty(artist)
      ?   <div className="tracks">
          <h2>{artist.name}</h2>
        <ul className="track-list">
          {
            artist.tracks.map(track => <li key={track._id} className="track">
              {track.name} &nbsp;
              <i className="fa fa-plus-square" onClick={()=>addTrackToPlayList(track)}/>
            </li>)
          }
        </ul>
        </div>
      : <div className="wrapper">
        <div className="inner">
          <Alert bsStyle="info">
            Please, choose artist.
          </Alert>
        </div>
      </div>
  )
};

const mapStateToProps = state => ({
  artist: state.artists.artist
});

const mapDispatchTopProps = dispatch => bindActionCreators({addTrackToPlayList}, dispatch);

export default connect(mapStateToProps, mapDispatchTopProps)(Tracks);
