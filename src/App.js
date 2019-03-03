import React, { Component } from 'react';
import {getBikeNetworks} from './apiClient';
import NetworkMap from './NetworkMap';

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export default class App extends Component {
  state = {
    networks: null,
  }

  componentDidMount() {
    this._fetchBikeNetworks()
  }

  async _fetchBikeNetworks(){
    const networks = await getBikeNetworks();
    this.setState({ networks });
  }

  render() {
    const {networks} = this.state;
    return (
      <NetworkMap token={TOKEN} networks={networks}/>
    );
  }
}
