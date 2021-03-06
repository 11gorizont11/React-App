import React, {PureComponent} from "react";
import {connect} from "react-redux";
import _ from "lodash";
import {Alert, FormGroup, FormControl, HelpBlock} from "react-bootstrap"
import {removeTrackFromPlatList, requestCreatePlaylist, requestUpdatePlaylist, savePlaylistName} from "../../actions/playListAction";

class PlayList extends PureComponent{

  constructor(props){
    super(props);
    this.state = {
      name: '',
      showEditName: false,
      errors: {}
    };
  }


  handleChangeName(ev){
    const {name, value} = ev.target;
    let {errors} = this.state;
    let newState = {};
    _.unset(errors, `${name}`);
    if(value.length === 0){
      _.set(newState, `errors.${name}`, "Playlist name can not be empty");
    }
    _.set(newState, name, value);
    this.setState(newState);
  }


  render() {
    const {playList, removeTrackFromPlatList, handleSave, savePlaylistName} = this.props;
    const {errors} =this.state;
    return  <div className="playlist">
      {
        this.state.showEditName ?
          <FormGroup validationState={_.has(errors, "name")?"error": null} onKeyDown={
            (ev)=>{
              if(_.includes([ "Enter" ], ev.key)){
                ev.preventDefault();
                this.setState({showEditName: !this.state.showEditName},()=>savePlaylistName(this.state.name))
              }
            }
          }>
            <FormControl
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Enter playlist Name"
              onChange={(ev)=>this.handleChangeName(ev)}
              onBlur={()=>this.setState({showEditName: !this.state.showEditName},()=>savePlaylistName(this.state.name))}
            />
            {
              _.has(errors, "name")&&<HelpBlock>{errors.name}</HelpBlock>
            }
          </FormGroup>
          : <h2 onClick={()=>this.setState({showEditName: !this.state.showEditName})}>{playList.name} Playlist</h2>
      }

        {playList.tracks.length > 0
          ?<ul className="track-list">
            {
              playList.tracks.map(track => <li key={track._id} className="track">
                {track.name} &nbsp;
                <i className="fa fa-minus-square" onClick={()=>removeTrackFromPlatList(track._id)}/>
              </li>)
            }
            <li><button className="btn btn-save" onClick={()=>handleSave(playList)}>
              {playList._id ? "update" : "save"}
              </button></li>
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

const mapDispatchTopProps = dispatch => ({
  handleSave: playList => playList._id ?requestUpdatePlaylist(playList):dispatch(requestCreatePlaylist(playList)),
  removeTrackFromPlatList: id => dispatch(removeTrackFromPlatList(id)),
  savePlaylistName: name =>dispatch(savePlaylistName(name))
});

export default connect(mapStateToProps, mapDispatchTopProps)(PlayList);