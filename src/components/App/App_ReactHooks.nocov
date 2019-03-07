import React, { useState, useEffect } from 'react';
import ContentWithSidebar from '../Layout/ContentWithSideBar';
import {getBikeNetworks, getBikeNetwork} from '../../utils/apiClient';
import NetworkMap from '../NetworkMap';
import StationList from '../StationList';
import {MODES} from '../../utils/constants';
import AppStyled, {HeaderStyled} from './AppStyled';
import Autocomplete from '../Autocomplete';
import Logo from './Logo';
const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const App = (props) => {
  const [networks, setNetworks] = useState(null);
  const [mode, setMode] = useState(MODES.networks);
  const [network, setNetwork] = useState(null);
  const [data, setData] = useState(null);
  const _fetchBikeNetworks = async () => {
     try {
      const networks = await getBikeNetworks();
      setNetworks(networks);
      setData(networks);
    } catch (err) {
    }
  };

  const _onNetworkSelect = async (net) => {
    const n = net ? await getBikeNetwork(net.href): null;
    const m = n ? MODES.network : MODES.networks;
    const d = n ? n.stations : networks;
    setNetwork(n);
    setMode(m);
    setData(d);
  };

  useEffect(() => {
    _fetchBikeNetworks();
  }, []);

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
              onSelect={_onNetworkSelect}
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
          onNetworkSelected={_onNetworkSelect}
        />
      } />
    </AppStyled>
  );
}

export default App;
