const URL = 'http://api.citybik.es/v2/networks';

export default async ()=> {
  const response = await fetch(URL);
  const json = await response.json();
  const networks = json && json.networks;
  return networks || [];;
}
