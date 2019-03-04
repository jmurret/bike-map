import React, {PureComponent} from 'react';
import {Popup} from 'react-map-gl';

const popupBodyStyle = {
  width: 240,
  height: 160,
  fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
};
const hrStyle = {
  borderStyle: 'solid',
  borderColor: 'lightGrey',
  borderWidth: '1px 0 0 0',
  marginBlockStart: 0,
};
const h2Style = {
  marginBlockStart: 8,
  marginBlockEnd: 8,
  color: '#666',
};

const descrStyle = {
  marginBlockStart: 0,
  marginBlockEnd: 0,
};
export default class PinPopup extends PureComponent {
  render() {
    const {network, onClose} = this.props;
    if (!network) return null;
    return (
      <Popup tipSize={5}
        anchor="top"
        longitude={network.location.longitude}
        latitude={network.location.latitude}
        closeOnClick={false}
        onClose={onClose} >
        <div style={popupBodyStyle}>
          <h2 style={h2Style}>{network.name}</h2>
          <hr style ={hrStyle} />
          <div style={descrStyle}>{network.location.city}</div>
          <div style={descrStyle}>{network.location.country}</div>
        </div>
      </Popup>
    );
  }
}
