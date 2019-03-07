export default {
  networks: [
    {
      company: ['Nextbike GmbH'],
      href: '/v2/networks/norisbike-nurnberg',
      id: 'norisbike-nurnberg',
      location: {city: 'Nürnberg', country: 'DE', latitude: 49.4479, longitude: 11.0814},
      name: 'NorisBike',
    },
    {
      company: ['BCycle, LLC'],
      href: '/v2/networks/denver',
      id: 'denver',
      location: {city: 'Denver, CO', country: 'US', latitude: 1.4479, longitude: 20.0814},
      name: 'Denver B-cycle',
    },
  ]
};

export const transformedNetworksData = [
  {
    company: ['Nextbike GmbH'],
    href: '/v2/networks/norisbike-nurnberg',
    id: 'norisbike-nurnberg',
    city: 'Nürnberg',
    country: 'DE',
    latitude: 49.4479,
    longitude: 11.0814,
    name: 'NorisBike',
    search: 'Nürnberg, DE - NorisBike',
  },
  {
    company: ['BCycle, LLC'],
    href: '/v2/networks/denver',
    id: 'denver',
    city: 'Denver, CO',
    country: 'US',
    latitude: 1.4479,
    longitude: 20.0814,
    name: 'Denver B-cycle',
    search: 'Denver, CO, US - Denver B-cycle',
  },
];
