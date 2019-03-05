import React, { Component } from 'react';
import ContentWithSidebar from '../Layout/ContentWithSideBar';
import {getBikeNetworks, getBikeNetwork} from '../../utils/apiClient';
import NetworkMap from '../NetworkMap';
import StationList from '../StationList';
import {MODES} from '../../utils/constants';
import AppStyled, {HeaderStyled} from './AppStyled';
import Autocomplete from '../Autocomplete';
import Logo from './Logo';
const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export default class App extends Component {
  state = {
    networks: null,
    mode: MODES.networks,
    data: null,
  }

  componentDidMount() {
    this._fetchBikeNetworks()
  }

   _fetchBikeNetworks = async () => {
     try {
      const networks = await getBikeNetworks();
      this.setState({ networks, data: networks });
    } catch (err) {
    }
  }

  _fetchBikeNetwork = async (object) => {
    try {
      return await getBikeNetwork(object.href);
    } catch (err) {
    }
  }

  _onNetworkSelect = async (net) => {
    if (!net) {
      this.setState({network:null, mode: MODES.networks, data: this.state.networks});
    } else {
      const network = await this._fetchBikeNetwork(net);
      this.setState({network, mode: MODES.network, data: network.stations});
    }

  };

  render() {
    const {networks, mode, network, data} = this.state;
    if (!networks) return null;
    return (
      <AppStyled>
        <ContentWithSidebar
        renderSideBar ={
          <React.Fragment>
            <HeaderStyled>
              <Logo />
              <Autocomplete
                options={networks}
                selectedOption={network}
                searchField="search"
                displayField="search"
                onSelect={this._onNetworkSelect}
                placeholder="Search for a city or network"
              />
            </HeaderStyled>
            {network ? <StationList stations={network.stations} /> : null}
          </React.Fragment>
        }
        renderMainContent={
          <NetworkMap
            token={TOKEN}
            data={data}
            mode={mode}
            network={network}
            onNetworkSelected={this._onNetworkSelect}
          />
        } />
      </AppStyled>
    );
  }
}
