const BASE_URL = 'https://api.citybik.es';

const _getData =  async (path, rootObjectName)=> {
  const response = await fetch(`${BASE_URL}${path}`);
  const json = await response.json();
  const data = json && json[rootObjectName];
  return data || [];;
};
const getBikeNetworks =  async ()=> {
    const data = await _getData('/v2/networks', 'networks');
    const networks = data.map(x => _transformNetwork(x));
    networks.sort((a, b) => (a.name - b.name));
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
