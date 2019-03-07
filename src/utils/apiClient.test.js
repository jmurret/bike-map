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
    const data = await getBikeNetworks();
    expect(data[0]).toEqual(transformedNetworksData[1]);
  });
  it('should return empty array if api returns null', async ()=>{
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({ok: true, id: '123', json: ()=>(null)});
      });
    });
    expect(await getBikeNetworks()).toEqual([]);
  });
});

describe('getBikeNetwork', ()=> {
  it('should return transformed', async ()=>{
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({ok: true, id: '123', json: ()=>(networkMockData)});
      });
    });
    const data = await getBikeNetwork('/v2/networks/denver');
    expect(data[0]).toEqual(transformedNetworkData[1]);
  });
});
