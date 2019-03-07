import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Autocomplete from './Autocomplete';
import AutocompleteInput from './AutocompleteInput';
import {KEYS} from '../../utils/constants';
import {transformedNetworksData} from '../../../testing/networksMockData';
const props = {
  options: transformedNetworksData,
  searchField: 'search',
  displayField: 'search',
  onSelect: jest.fn(),
};

const shallowRender = (props) => shallow(
   <Autocomplete {...props} />
);

const mountedRender = (props) => mount(
  <Autocomplete {...props} />
);

describe('<Autocomplete', ()=> {
  describe('render', ()=> {

    it('should render AutocompleteInput', () => {
      const comp = mountedRender(props);
      expect(comp.find(AutocompleteInput).length).toEqual(1);
    });

    it('should show options list when key has been entered matching results and set active option to first', () => {
      const comp = mountedRender(props);
      comp.find('input').simulate('change', { target: { value: 'd' }});
      expect(comp.find('ul').length).toEqual(1);
      expect(comp.find('.option-active').text()).toEqual('Nürnberg, DE - NorisBike');
    });

    it('should change the active option to the next record when using the down arrow', () => {
      const comp = mountedRender(props);
      comp.find('input').simulate('change', { target: { value: 'd' }});
      comp.find('input').simulate('keydown', { keyCode: KEYS.downArrow});
      comp.update();
      console.log(comp.state())
      expect(comp.find('.option-active').text()).toEqual('Denver, CO, US - Denver B-cycle');
    });

    it('should show options list when key has been entered matching results and set active option to first', () => {
      const comp = mountedRender(props);
      comp.find('input').simulate('change', { target: { value: 'den' }});
      expect(comp.find('ul').length).toEqual(1);
      expect(comp.find('.option-active').text()).toEqual('Denver, CO, US - Denver B-cycle');
    });

    it('when clicking on an option, it should set state and hide the list', () => {
      const comp = mountedRender(props);
      comp.find('input').simulate('change', { target: { value: 'd' }});
      comp.find('.option-active').simulate('click');
      expect(comp.find('ul').length).toEqual(0);
      expect(comp.state().selectedOption).toEqual(transformedNetworksData[0]);
    });

    // describe('when there is network data', () =>{
    //   let shallowComp, comp;
    //   beforeAll(async () => {
    //     apiClient.getBikeNetworks = jest.fn(() => new Promise((resolve, reject) => {
    //       resolve(transformedNetworksData);
    //     }));
    //     apiClient.getBikeNetwork = jest.fn(() => new Promise((resolve, reject) => {
    //       resolve(transformedNetworkData);
    //     }));
    //     comp = await mountedRender();
    //     comp.update();
    //     shallowComp = await shallowRender();
    //
    //   });
    //   it('should set mode to Network in state', () => {
    //     expect(shallowComp.state('mode')).toEqual(MODES.networks);
    //   });
    //   it('should set mode to data in state to networks data from api', () => {
    //     expect(shallowComp.state('data')).toEqual(transformedNetworksData);
    //   });
    //   it('should set mode to data in state to networks data from api', () => {
    //     expect(shallowComp.state('networks')).toEqual(transformedNetworksData);
    //   });
    //   it ('should render AppStyle', () =>{
    //     expect(shallowComp.find(AppStyled).length).toEqual(1);
    //   });
    //   it ('should render ContentWithSidebar', () =>{
    //     expect(shallowComp.find(ContentWithSidebar).length).toEqual(1);
    //   });
    //   it ('should render Logo in Sidebar', () =>{
    //     expect(comp.find('SideBarStyled__SideBar').find(Logo).length).toEqual(1);
    //   });
    //   it ('should render Autocomplete in Sidebar', () =>{
    //     expect(comp.find('SideBarStyled__SideBar').find(Autocomplete).length).toEqual(1);
    //   });
    //   it ('should render Network Map in Main Content', () =>{
    //     expect(comp.find('MainContentStyled__MainContent').find(NetworkMap).length).toEqual(1);
    //   });
    //   it ('should not initially render station list', () => {
    //     expect(comp.find('SideBarStyled__SideBar').find(StationList).length).toEqual(0);
    //   });
    //
    //   describe('when there a network is selected', () =>{
    //     let localComp;
    //     let instance;
    //     beforeAll(async () => {
    //       localComp = await shallowRender();
    //       instance = localComp.instance();
    //       await instance._onNetworkSelect(networkData);
    //     });
    //     it ('should set network in state to network from api', async () => {
    //       expect(localComp.state().network).toEqual(transformedNetworkData);
    //     });
    //     it ('should set data in state to stations on network from api', async () => {
    //       expect(localComp.state().data).toEqual(transformedNetworkData.stations);
    //     });
    //     it ('should set mode in state to network', async () => {
    //       expect(localComp.state().mode).toEqual(MODES.network);
    //     });
    //   });
    //   describe('when there a network is de-selected', () =>{
    //     let localComp;
    //     let instance;
    //     beforeAll(async () => {
    //       localComp = await shallowRender();
    //       instance = localComp.instance();
    //       await instance._onNetworkSelect(networkData);
    //       localComp.update();
    //       await instance._onNetworkSelect(null);
    //     });
    //     it ('should set network in state to null', async () => {
    //       expect(localComp.state().network).toBeNull();
    //     });
    //     it ('should set data in state to networks in state from api', async () => {
    //       expect(localComp.state().data).toEqual(transformedNetworksData);
    //     });
    //     it ('should set mode in state to networks', async () => {
    //       expect(localComp.state().mode).toEqual(MODES.networks);
    //     });
    //   });
    // });
  });
});
