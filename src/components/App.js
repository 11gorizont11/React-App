import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import {Row,Col} from "react-bootstrap"
import {requestAllArtists} from '../actions/artistAction';
import Header from "./common/Header";
import Artists from "./Artists";
import Tracks from "./Tracks";
import PlayList from "./PlayList"
import './App.scss';

class App extends Component {

  componentDidMount(){
    this.props.requestAllArtists();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Row>
            <Col md={4}><Artists/></Col>
            <Col md={4}><Tracks/></Col>
            <Col md={4}><PlayList/></Col>
          </Row>


        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>bindActionCreators({requestAllArtists}, dispatch);

export default connect(null, mapDispatchToProps)(App);
