import React, { Component } from 'react';
import {Marker} from 'react-map-gl';
import NetworkPin from './NetworkPin';

export default class NetworkMarkers extends Component {

  render() {
    const {networks, onMarkerClick} = this.props;
    if (!networks) return null;
    return (
      networks.map((network, index) => (
        <Marker
          key={`${index}`}
          longitude={network.location.longitude}
          latitude={network.location.latitude} >
          <NetworkPin size={20} onClick={()=> onMarkerClick(network)} />
        </Marker>
      )));
  }
}
