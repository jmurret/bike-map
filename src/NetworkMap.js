import React, { Component } from 'react';
import DeckGL from 'deck.gl';
import MapGL, { FlyToInterpolator} from 'react-map-gl';
import {easeCubic} from 'd3-ease';
import getLayers from './getLayers';

const MAP_STYLE = 'mapbox://styles/mapbox/light-v9';

export const tooltipStyle = {
  position: 'absolute',
  padding: '4px',
  background: 'rgba(0, 0, 0, 0.8)',
  color: '#fff',
  maxWidth: '300px',
  fontSize: '10px',
  zIndex: 9,
  pointerEvents: 'none',
  cursor: 'pointer',
};

export default class App extends Component {
  state = {
    viewport: {
      latitude: 30.785164,
      longitude: 0,
      zoom: 1,
      bearing: 0,
      pitch: 0
    },
    hover: {
      x: 0,
      y: 0,
      hoveredObject: null
    },
    style: MAP_STYLE,
  }

  onStyleChange = style => {
    this.setState({ style });
  };

  _onViewportChange = viewport => {
       this.setState({viewport});
   };

  _onClick = ({ x, y, object, lngLat }) => {
    console.log({ x, y, object, lngLat });
    const viewport = {
        ...this.state.viewport,
        longitude: lngLat[0],
        latitude: lngLat[1],
        zoom: 13,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubic
    };
    this.setState({viewport});
  };

  render() {
    const {token, networks} = this.props;
    const {viewport, style} = this.state;
    return (
      <MapGL
        {...viewport}
        mapStyle={style}
        width="100%"
        height="100%"
        maxPitch={85}
        onViewportChange={this._onViewportChange} mapboxApiAccessToken={token}>
      <DeckGL
          layers={(getLayers({
            data: networks,
            onClick: click => this._onClick(click),
          }))}
          initialViewState={viewport}
          controller
          onViewportChange={this._onViewportChange}
        >
        </DeckGL>
      </MapGL>
      );
  }
}
