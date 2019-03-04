import React from 'react';
import StationListing from './StationListing';

const StationList = ({stations}) => (
  stations.map((station, index) => (
    <div key={index}>
      <StationListing station={station} />
    </div>
  ))
);

export default StationList;
