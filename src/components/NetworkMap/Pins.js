import React, { Component } from 'react';
import {Marker} from 'react-map-gl';
import Pin from './Pin';

export default class Pins extends Component {

  render() {
    const {points, onPinClick, mode} = this.props;
    if (!points) return null;
    return (
      points.map((point, index) => (
        <Marker
          key={`${index}`}
          longitude={point.longitude}
          latitude={point.latitude} >
          <Pin size={20} data={point} mode={mode} onClick={()=> onPinClick(point)} />
        </Marker>
      )));
  }
}
