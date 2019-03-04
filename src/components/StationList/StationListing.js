import React from 'react';
import StationListingStyled from './StationListingStyled';
import Pill from '../Pill';
import getColor from '../../utils/getColor';

const StationListing = ({station, className}) => (
  <StationListingStyled>
    <div className='station--name'>{station.name}</div>
    <Pill color={getColor(station.free_bikes)} className='station--bikes'>{station.free_bikes} Available Bikes</Pill>
    <Pill color={getColor(station.empty_slots)} className='station--slots'>{station.empty_slots} Available Slots</Pill>
  </StationListingStyled>
);

export default StationListing;
