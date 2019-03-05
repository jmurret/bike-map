const API_BASE_URL = 'https://api.citybik.es';
const MODES = {
  network: 'network',
  networks: 'networks',
  none: 'none',
};

const STATUS_COLORS = {
  havePlenty: '#093',
  runningLow: '#FFB43F',
  empty: '#E33033',
};

const MAP_STYLE = 'mapbox://styles/mapbox/light-v9';
const KEYS = {
  enter: 13,
  upArrow: 38,
  downArrow: 40,
};

const DEFAULT_MAP_STATE = {
  viewport: {
    latitude: 30.785164,
    longitude: 0,
    zoom: 1,
    bearing: 0,
    pitch: 0
  },
  style: MAP_STYLE,
  layers: [],
  mode: MODES.networks,
  network: null,
};


export {
  API_BASE_URL,
  DEFAULT_MAP_STATE,
  KEYS,
  MAP_STYLE,
  MODES,
  STATUS_COLORS,
};
