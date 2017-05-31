import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {getAllArtistTrack} from "../../actions/artistAction";

const Artists = props =>{
  const {artists, getAllArtistTrack} = props;
  return (<div className="artists">
      <h2>All artist collection</h2>
      <ul className="artist-list">
        {
          artists.listArtists.map(artist => <li key={artist._id} className="artist"
            onDoubleClick={()=>getAllArtistTrack(artist._id)}
          >
            {artist.name} &nbsp;
            <span className="tracks-count">{artist.tracks.length}&nbsp;tracks</span>
            <i className="fa fa-eye" onClick={()=>getAllArtistTrack(artist._id)}/>
          </li>)
        }
      </ul>
  </div>

  )
};

const mapStateToProps = state => ({
  artists: state.artists
});

const mapDispatchTopProps = dispatch => bindActionCreators({getAllArtistTrack}, dispatch);

export default connect(mapStateToProps, mapDispatchTopProps)(Artists);
