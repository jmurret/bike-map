import React, { Component } from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from 'deck.gl';
import getLayers from './getLayers';
import getBikeData from './getBikeData';

export const tooltipStyle = {
  position: 'absolute',
  padding: '4px',
  background: 'rgba(0, 0, 0, 0.8)',
  color: '#fff',
  maxWidth: '300px',
  fontSize: '10px',
  zIndex: 9,
  pointerEvents: 'none'
};

const INITIAL_VIEW_STATE = {
  longitude: -74,
  latitude: 40.7,
  zoom: 3,
  minZoom: 3,
  maxZoom: 16,
  pitch: 0,
  bearing: 0
};

export default class App extends Component {
  state = {
    hover: {
      x: 0,
      y: 0,
      hoveredObject: null
    },
    style: 'mapbox://styles/mapbox/light-v9',
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      longitude: -74,
      latitude: 40.7,
      zoom: 3,
      maxZoom: 16
    },
    bikes: [],
  }

  componentDidMount() {
    this._fetchBikes()
  }

  async _fetchBikes(){
    const data = await getBikeData();
    this.setState({ data });
  }

  onStyleChange = (style) => {
    this.setState({style});
  }

  _onHover({ x, y, object }) {
    const label = object ? object.name : null;
    this.setState({ hover: { x, y, hoveredObject: object, label } });
  }

  render() {
    const { hover, settings, data, style } = this.state;
    const layers = getLayers({
      data,
      onHover: hover => this._onHover(hover),
      settings: settings
    });
    console.log({layers});
    return (
      <div>
        {hover.hoveredObject && (
          <div
            style={{
              ...tooltipStyle,
              transform: `translate(${hover.x}px, ${hover.y}px)`
            }}
          >
            <div>{hover.label}</div>
          </div>
        )}
        <DeckGL
          layers={layers}
          initialViewState={INITIAL_VIEW_STATE}
          controller
          >
          <StaticMap mapStyle={style} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} />
        </DeckGL>
      </div>
    );
  }
}
