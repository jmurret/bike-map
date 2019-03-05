import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';
import {transformedNetworksData} from '../../../testing/networksMockData'
import networkData, {transformedNetworkData} from '../../../testing/networkMockData'
import ContentWithSidebar from '../Layout/ContentWithSideBar';
import * as apiClient from '../../utils/apiClient';
import NetworkMap from '../NetworkMap';
import StationList from '../StationList';
import {MODES} from '../../utils/constants';
import AppStyled, {HeaderStyled} from './AppStyled';
import Autocomplete from '../Autocomplete';
import Logo from './Logo';

const shallowRender = async (props) => shallow(
  await <App />
);

const mountedRender = async (props) => mount(
  <App />
);

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
      it('should set mode to Network in state', () => {
        expect(shallowComp.state('mode')).toEqual(MODES.networks);
      });
      it('should set mode to data in state to networks data from api', () => {
        expect(shallowComp.state('data')).toEqual(transformedNetworksData);
      });
      it('should set mode to data in state to networks data from api', () => {
        expect(shallowComp.state('networks')).toEqual(transformedNetworksData);
      });
      it ('should render AppStyle', () =>{
        expect(shallowComp.find(AppStyled).length).toEqual(1);
      });
      it ('should render ContentWithSidebar', () =>{
        expect(shallowComp.find(ContentWithSidebar).length).toEqual(1);
      });
      it ('should render Logo in Sidebar', () =>{
        expect(comp.find('SideBarStyled__SideBar').find(Logo).length).toEqual(1);
      });
      it ('should render Autocomplete in Sidebar', () =>{
        expect(comp.find('SideBarStyled__SideBar').find(Autocomplete).length).toEqual(1);
      });
      it ('should render Network Map in Main Content', () =>{
        expect(comp.find('MainContentStyled__MainContent').find(NetworkMap).length).toEqual(1);
      });
      it ('should not initially render station list', () => {
        expect(comp.find('SideBarStyled__SideBar').find(StationList).length).toEqual(0);
      });

      describe('when there a network is selected', () =>{
        let localComp;
        let instance;
        beforeAll(async () => {
          localComp = await shallowRender();
          instance = localComp.instance();
          await instance._onNetworkSelect(networkData);
        });
        it ('should set network in state to network from api', async () => {
          expect(localComp.state().network).toEqual(transformedNetworkData);
        });
        it ('should set data in state to stations on network from api', async () => {
          expect(localComp.state().data).toEqual(transformedNetworkData.stations);
        });
        it ('should set mode in state to network', async () => {
          expect(localComp.state().mode).toEqual(MODES.network);
        });
      });
      describe('when there a network is de-selected', () =>{
        let localComp;
        let instance;
        beforeAll(async () => {
          localComp = await shallowRender();
          instance = localComp.instance();
          await instance._onNetworkSelect(networkData);
          localComp.update();
          await instance._onNetworkSelect(null);
        });
        it ('should set network in state to null', async () => {
          expect(localComp.state().network).toBeNull();
        });
        it ('should set data in state to networks in state from api', async () => {
          expect(localComp.state().data).toEqual(transformedNetworksData);
        });
        it ('should set mode in state to networks', async () => {
          expect(localComp.state().mode).toEqual(MODES.networks);
        });
      });
    });
  });
});
