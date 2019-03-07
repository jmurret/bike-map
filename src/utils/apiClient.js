import {API_BASE_URL} from './constants';

const _getData =  async (path, rootObjectName)=> {
  const response = await fetch(`${API_BASE_URL}${path}`);
  const json = await response.json();
  let data = json && json[rootObjectName];
  return data || [];
};
const getBikeNetworks =  async ()=> {
    const data = await _getData('/v2/networks', 'networks');
    return data.map(x => _transformNetwork(x)).sort((a, b) => a.search.localeCompare(b.search));
};

const getBikeNetwork =  async (path)=> {
  const data = await _getData(path, 'network');
  const {stations, ...network} = data;
  stations.sort((a, b) => a.name.localeCompare(b.name));
  console.log(stations);
  return _transformNetwork({stations, ...network});
};

const _transformNetwork = (network) => {
  const {location, ...net} = network;
  return {...net, ...location, search: `${location.city}, ${location.country} - ${net.name}`};
}

export {
  getBikeNetworks,
  getBikeNetwork
}
