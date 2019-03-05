import {getBikeNetworks, getBikeNetwork} from './apiClient';
import networksMockData, {transformedNetworksData} from '../../testing/networksMockData'
import networkMockData, {transformedNetworkData} from '../../testing/networkMockData'

describe('getBikeNetworks', ()=> {
  it('should return transformed', async ()=>{
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({ok: true, id: '123', json: ()=>(networksMockData)});
      });
    });
    expect(await getBikeNetworks()).toEqual(transformedNetworksData);
  });
});

describe('getBikeNetwork', ()=> {
  it('should return transformed', async ()=>{
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({ok: true, id: '123', json: ()=>(networkMockData)});
      });
    });
    expect(await getBikeNetwork('/v2/networks/denver')).toEqual(transformedNetworkData);
  });
});
