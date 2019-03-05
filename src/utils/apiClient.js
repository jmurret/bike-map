import {API_BASE_URL} from './constants';

const _getData =  async (path, rootObjectName)=> {
  const response = await fetch(`${API_BASE_URL}${path}`);
  const json = await response.json();
  const data = json && json[rootObjectName];
  return data || [];
};
const getBikeNetworks =  async ()=> {
    const data = await _getData('/v2/networks', 'networks');
    const networks = data.map(x => _transformNetwork(x)).sort((a, b) => (a.search - b.search));
    return networks;
};

const getBikeNetwork =  async (path)=> {
  const network = await _getData(path, 'network');
  return _transformNetwork(network);
};

const _transformNetwork = (network) => {
  const {location, ...net} = network;
  return {...net, ...location, search: `${location.city}, ${location.country} - ${net.name}`};
}

export {
  getBikeNetworks,
  getBikeNetwork
}
