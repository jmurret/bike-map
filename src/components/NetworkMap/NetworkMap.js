import React, { Component } from 'react';
import Pins from './Pins';
import MapGL, { FlyToInterpolator} from 'react-map-gl';
import {easeCubic} from 'd3-ease';
import {MODES, DEFAULT_MAP_STATE} from '../../utils/constants';

export default class NetworkMap extends Component {
  constructor(props) {
    super(props);
    const {networks} = this.props;
    this.initialState = {
      ...DEFAULT_MAP_STATE,
      data: networks,
    };

    this.state = this.initialState
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.network !== this.props.network){
      const {network} = this.props;
      const updatedViewPort = network ? {
        ...this.state.viewport,
        longitude: network.longitude,
        latitude: network.latitude,
        zoom: 12,
      } : this.initialState.viewport;
      this._transitionToPosition(updatedViewPort);
    }
  }

  _onViewportChange = viewport => {
       this.setState({viewport});
   };

  // _onClick = ({ x, y, object, lngLat }) => {
  //   const mode = MODES.none;
  //   this.setState({mode}, () => {
  //     this._transitionToPosition(lngLat[1], lngLat[0], object);
  //   });
  // };

  _transitionToPosition = (updateViewPort) => {
    const viewport = {
        ...updateViewPort,
        transitionDuration: 3000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubic
    };
    this.setState({viewport});
  }


  _onTransitionEnd = (x) => {
    // const {network, viewport} = this.state;
    // this.getNetwork(network, viewport.latitude, viewport.longitude);
  }

  _handleClick = (object) => {
    const {mode, onNetworkSelected} = this.props;
    if (mode === MODES.networks) {
      onNetworkSelected(object);
    }
  }
  //
  // _handleNetworkPopupClose = () => {
  //   this.setState({network: null})
  // }

  render() {
    const {token, mode, data} = this.props;
    const {viewport, style} = this.state;
    return (
      <MapGL
        {...viewport}
        mapStyle={style}
        width="100%"
        height="100%"
        maxPitch={85}
        onViewportChange={this._onViewportChange} mapboxApiAccessToken={token}
        onTransitionEnd={this._onTransitionEnd}
        >
          {
            mode !== MODES.none ?
              <Pins points={data} onPinClick={this._handleClick} mode={mode} />
              : null
          }

        {// <MarkerPopup network={network} onClose={this._handleNetworkPopupClose} />
        }
      </MapGL>
      );
  }
}
