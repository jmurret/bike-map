import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';
import {transformedNetworksData} from '../../../testing/networksMockData'
import networkData, {transformedNetworkData} from '../../../testing/networkMockData'
import ContentWithSidebar from '../Layout/ContentWithSideBar';
import * as apiClient from '../../utils/apiClient';
import *  as NetworkMap from '../NetworkMap';
import StationList from '../StationList';
import {MODES} from '../../utils/constants';
import AppStyled, {HeaderStyled} from './AppStyled';
import Autocomplete from '../Autocomplete';
import Logo from './Logo';
import {KEYS} from '../../utils/constants';

NetworkMap.default = jest.fn(()=> null);
const shallowRender = async (props) => shallow(
  await <App />
);

const mountedRender = async (props) => mount(
  <App />
);

function tick() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  })
}

describe('<App', ()=> {
  describe('render', ()=> {
    describe('when there is no network data', () =>{
      it ('should render null if there is no network data', async () =>{
        apiClient.getBikeNetworks = jest.fn(() => new Promise((resolve, reject) => {
          resolve({});
        }));
        const comp = await shallowRender();
        expect(comp.find(AppStyled).length).toEqual(0);
      });
    });
    describe('when there is network data', () =>{
      let shallowComp, comp;
      beforeAll(async () => {
        apiClient.getBikeNetworks = jest.fn(() => new Promise((resolve, reject) => {
          resolve(transformedNetworksData);
        }));
        apiClient.getBikeNetwork = jest.fn(() => new Promise((resolve, reject) => {
          resolve(transformedNetworkData);
        }));
        comp = await mountedRender();
        comp.update();
        shallowComp = await shallowRender();

      });
      it('should show options list when key has been entered matching results and set active option to first', () => {
        comp.find('input').simulate('change', { target: { value: 'd' }});
        expect(comp.find('ul').length).toEqual(1);
        expect(comp.find('.option-active').text()).toEqual('Nürnberg, DE - NorisBike');
      });

      it('should change the active option to the next record when using the down arrow', () => {
        comp.find('input').simulate('change', { target: { value: 'd' }});
        comp.find('input').simulate('keydown', { keyCode: KEYS.downArrow});
        comp.find('input').simulate('keydown', { keyCode: KEYS.downArrow});
        expect(comp.find('.option-active').text()).toEqual('Denver, CO, US - Denver B-cycle');
      });

      it('should change the active option to the previous record when using the down arrow', () => {
        comp.find('input').simulate('change', { target: { value: 'd' }});
        comp.find('input').simulate('keydown', { keyCode: KEYS.downArrow});
        comp.find('input').simulate('keydown', { keyCode: KEYS.upArrow});
        comp.find('input').simulate('keydown', { keyCode: KEYS.upArrow});
        expect(comp.find('.option-active').text()).toEqual('Nürnberg, DE - NorisBike');
      });

      it('should show options list when key has been entered matching results and set active option to first', () => {
        comp.find('input').simulate('change', { target: { value: 'den' }});
        expect(comp.find('ul').length).toEqual(1);
        expect(comp.find('.option-active').text()).toEqual('Denver, CO, US - Denver B-cycle');
      });

      it('should set state to network mode and show network stations when clicking on an option', async () => {
        comp.find('input').simulate('change', { target: { value: 'd' }});
        comp.find('.option-active').simulate('click');
        await tick();
        comp.update();
        expect(comp.find('ul').length).toEqual(0);
        expect(comp.state().network).toEqual(transformedNetworkData);
        expect(comp.state().data).toEqual(transformedNetworkData.stations);
        expect(comp.state().mode).toEqual(MODES.network);
        expect(comp.find(StationList).length).toEqual(1);
      });

      it('should set state to network mode and show network stations when pressing enter while an option is active', async () => {
        comp.find('input').simulate('change', { target: { value: 'd' }});
        comp.find('input').simulate('keydown', { keyCode: KEYS.enter});
        await tick();
        comp.update();
        expect(comp.find('ul').length).toEqual(0);
        expect(comp.state().network).toEqual(transformedNetworkData);
        expect(comp.state().data).toEqual(transformedNetworkData.stations);
        expect(comp.state().mode).toEqual(MODES.network);
        expect(comp.find(StationList).length).toEqual(1);
      });

      it('it should set state to networks mode and hide the list when click on the clear button in autocomplete', async () => {
        comp.find('input').simulate('change', { target: { value: 'd' }});
        comp.find('.option-active').simulate('click');
        await tick();
        comp.find('AutocompleteStyled__AutoCompleteDeleteIcon').simulate('click');
        expect(comp.state().network).toBeNull();
        expect(comp.state().data).toEqual(transformedNetworksData);
        expect(comp.state().mode).toEqual(MODES.networks);
        expect(comp.find(StationList).length).toEqual(0);
      });
    });
  });
});
