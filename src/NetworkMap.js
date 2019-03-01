import React, { Component } from 'react';
import MapGL, {Popup, Marker, NavigationControl} from 'react-map-gl';
import NetworkMarkers from './NetworkMarkers';
import NetworkPopup from './NetworkPopup';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};
const MAP_STYLE = 'mapbox://styles/mapbox/light-v9';

export default class App extends Component {
  state = {
    viewport: {
      latitude: 30.785164,
      longitude: 0,
      zoom: 1,
      bearing: 0,
      pitch: 0
    },
  }

  _updateViewport = (viewport) => {
    this.setState({viewport});
  }

  _handleClick = (network) => {
    this.setState({network});
  }

  _handleNetworkPopupClose = () => {
    console.log('clicked')
    this.setState({network: null})
  }

  render() {
    const {token, networks} = this.props;
    const {viewport, network} = this.state;
    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle={MAP_STYLE}
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={token}>
        <NetworkMarkers networks={networks} onMarkerClick={this._handleClick}/>
        <NetworkPopup network={network} onClose={this._handleNetworkPopupClose} />
      </MapGL>
    );
  }
}
