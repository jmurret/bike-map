import {getBikeNetworks, getBikeNetwork} from './apiClient';

describe('getBikeNetworks', ()=> {
  it('should return transformed', async ()=>{
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({ok: true, id: '123', json: ()=>({
          networks: [
            {
              company: ["Nextbike GmbH"],
              href: "/v2/networks/norisbike-nurnberg",
              id: "norisbike-nurnberg",
              location: {city: "Nürnberg", country: "DE", latitude: 49.4479, longitude: 11.0814},
              name: "NorisBike",
            },
            {
              company: ["BCycle, LLC"],
              href: "/v2/networks/denver",
              id: "denver",
              location: {city: "Denver, CO", country: "US", latitude: 1.4479, longitude: 20.0814},
              name: "Denver B-cycle",
            },
          ]
        }
      )});
      });
    });

    const expectedNetworksData = [
      {
        company: ["Nextbike GmbH"],
        href: "/v2/networks/norisbike-nurnberg",
        id: "norisbike-nurnberg",
        city: "Nürnberg",
        country: "DE",
        latitude: 49.4479,
        longitude: 11.0814,
        name: "NorisBike",
        search: 'Nürnberg, DE - NorisBike',
      },
      {
        company: ["BCycle, LLC"],
        href: "/v2/networks/denver",
        id: "denver",
        city: "Denver, CO",
        country: "US",
        latitude: 1.4479,
        longitude: 20.0814,
        name: "Denver B-cycle",
        search: 'Denver, CO, US - Denver B-cycle',
      },
    ];

    expect(await getBikeNetworks()).toEqual(expectedNetworksData);
  });
});

describe('getBikeNetworks', ()=> {
  it('should return transformed', async ()=>{
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({ok: true, id: '123', json: ()=>({
          "network":{
            "company":["BCycle, LLC"],
            "gbfs_href":"https://gbfs.bcycle.com/bcycle_denver/gbfs.json",
            "href":"/v2/networks/denver","id":"denver",
            "location":{"city":"Denver, CO","country":"US","latitude":39.72055,"longitude":-104.95253},
            "name":"Denver B-cycle",
            "stations":[
              {
                "empty_slots":2,
                "extra":{
                  "address":"1700 Wewatta St",
                  "last_updated":1551746315,
                  "renting":1,"returning":1,
                  "uid":"bcycle_denver_3395"
                },
                "free_bikes":28,
                "id":"61095b6d414001418d873aab20372c78",
                "latitude":39.75387,
                "longitude":-105.00105,
                "name":"17th & Wewatta",
                "timestamp":"2019-03-05T00:38:35.983000Z"
              }]}}
      )});
      });
    });

    const expectedNetworkData = {
        "company":["BCycle, LLC"],
        "gbfs_href":"https://gbfs.bcycle.com/bcycle_denver/gbfs.json",
        "href":"/v2/networks/denver","id":"denver",
        "city":"Denver, CO",
        "country":"US",
        "latitude":39.72055,
        "longitude":-104.95253,
        "name":"Denver B-cycle",
        "stations":[
          {
            "empty_slots":2,
            "extra":{
              "address":"1700 Wewatta St",
              "last_updated":1551746315,
              "renting":1,"returning":1,
              "uid":"bcycle_denver_3395"
            },
            "free_bikes":28,
            "id":"61095b6d414001418d873aab20372c78",
            "latitude":39.75387,
            "longitude":-105.00105,
            "name":"17th & Wewatta",
            "timestamp":"2019-03-05T00:38:35.983000Z"
          }],
          "search": "Denver, CO, US - Denver B-cycle",
      };
    expect(await getBikeNetwork('/v2/networks/denver')).toEqual(expectedNetworkData);
  });
});
