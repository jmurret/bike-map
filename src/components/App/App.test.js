import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import { transformedNetworksData } from '../../../testing/networksMockData';
import { transformedNetworkData } from '../../../testing/networkMockData';
import * as apiClient from '../../utils/apiClient';
import StationList from '../StationList';
import { MODES } from '../../utils/constants';
import AppStyled from './AppStyled';
import { KEYS } from '../../utils/constants';
import MapGL from 'react-map-gl';
jest.mock('react-map-gl');
MapGL.mockReturnValue = ({ children }) => <div>{children}</div>;

const shallowRender = async props => shallow(await <App />);

const mountedRender = async props => mount(<App />);

function tick() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}

const selectorSidebar = comp => comp.find('SideBarStyled__SideBar');
const selectorAutocomplete = comp =>
  selectorSidebar(comp).find('SideBarStyled__SideBar');
const selectorAutocompleteInput = comp =>
  selectorAutocomplete(comp).find('input');
const selectorAutocompleteOptionsList = comp =>
  selectorAutocomplete(comp).find('ul');
const selectorStationList = comp => selectorSidebar(comp).find('StationList');

describe('<App', () => {
  let comp;
  beforeAll(async () => {
    apiClient.getBikeNetworks = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(transformedNetworksData);
        })
    );
    apiClient.getBikeNetwork = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(transformedNetworkData);
        })
    );
    comp = await mountedRender();
    comp.update();
  });
  it('should show Logo in Sidebar', () => {
    expect(selectorSidebar(comp).find('AppStyled__LogoStyled').length).toEqual(
      1
    );
  });
  it('should show AutoComplete in Sidebar', () => {
    expect(selectorAutocomplete(comp).length).toEqual(1);
  });
  it('should show NetworkMap in Main Content', () => {
    expect(
      comp.find('MainContentStyled__MainContent').find('NetworkMap').length
    ).toEqual(1);
  });
  describe('when there is no network data', () => {
    it('should render null if there is no network data', async () => {
      apiClient.getBikeNetworks = jest.fn(
        () =>
          new Promise((resolve, reject) => {
            resolve({});
          })
      );
      const shallowComp = await shallowRender();
      expect(shallowComp.find(AppStyled).length).toEqual(0);
    });
  });
  describe('when there is network data', () => {
    it('should show options list when key has been entered matching results and set active option to first', () => {
      selectorAutocompleteInput(comp).simulate('change', {
        target: { value: 'den' }
      });
      expect(selectorAutocompleteOptionsList(comp).length).toEqual(1);
      expect(
        selectorAutocompleteOptionsList(comp)
          .find('.option-active')
          .text()
      ).toEqual('Denver, CO, US - Denver B-cycle');
    });

    it('should change the active option to the next record when using the down arrow', () => {
      selectorAutocompleteInput(comp).simulate('change', {
        target: { value: 'd' }
      });
      selectorAutocompleteInput(comp).simulate('keydown', {
        keyCode: KEYS.downArrow
      });
      selectorAutocompleteInput(comp).simulate('keydown', {
        keyCode: KEYS.downArrow
      });
      expect(
        selectorAutocompleteOptionsList(comp)
          .find('.option-active')
          .text()
      ).toEqual('Denver, CO, US - Denver B-cycle');
    });

    it('should change the active option to the previous record when using the down arrow', () => {
      selectorAutocompleteInput(comp).simulate('change', {
        target: { value: 'd' }
      });
      selectorAutocompleteInput(comp).simulate('keydown', {
        keyCode: KEYS.downArrow
      });
      selectorAutocompleteInput(comp).simulate('keydown', {
        keyCode: KEYS.upArrow
      });
      selectorAutocompleteInput(comp).simulate('keydown', {
        keyCode: KEYS.upArrow
      });
      expect(
        selectorAutocompleteOptionsList(comp)
          .find('.option-active')
          .text()
      ).toEqual('Nürnberg, DE - NorisBike');
    });

    it('should set state to network mode and show network stations when clicking on an option', async () => {
      selectorAutocompleteInput(comp).simulate('change', {
        target: { value: 'd' }
      });
      selectorAutocompleteOptionsList(comp)
        .find('.option-active')
        .simulate('click');
      await tick();
      comp.update();
      expect(selectorAutocompleteOptionsList(comp).length).toEqual(0);
      expect(comp.state().network).toEqual(transformedNetworkData);
      expect(comp.state().data).toEqual(transformedNetworkData.stations);
      expect(comp.state().mode).toEqual(MODES.network);
      expect(comp.find(StationList).length).toEqual(1);
      console.log(comp.debug());
    });

    it('should set state to network mode and show network stations when pressing enter while an option is active', async () => {
      selectorAutocompleteInput(comp).simulate('change', {
        target: { value: 'd' }
      });
      selectorAutocompleteInput(comp).simulate('keydown', {
        keyCode: KEYS.enter
      });
      await tick();
      comp.update();
      expect(selectorAutocompleteOptionsList(comp).length).toEqual(0);
      expect(comp.state().network).toEqual(transformedNetworkData);
      expect(comp.state().data).toEqual(transformedNetworkData.stations);
      expect(comp.state().mode).toEqual(MODES.network);
      expect(selectorStationList(comp).length).toEqual(1);
    });

    it('it should set state to networks mode and hide the list when click on the clear button in autocomplete', async () => {
      selectorAutocompleteInput(comp).simulate('change', {
        target: { value: 'd' }
      });
      selectorAutocompleteOptionsList(comp)
        .find('.option-active')
        .simulate('click');
      await tick();
      selectorAutocomplete(comp)
        .find('AutocompleteStyled__AutoCompleteDeleteIcon')
        .simulate('click');
      expect(comp.state().network).toBeNull();
      expect(comp.state().data).toEqual(transformedNetworksData);
      expect(comp.state().mode).toEqual(MODES.networks);
      expect(selectorStationList(comp).length).toEqual(0);
    });
  });
});
