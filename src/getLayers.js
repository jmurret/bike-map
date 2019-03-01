import { ScatterplotLayer } from 'deck.gl';

export default ({ data, onHover, settings, onClick }) => {
  return new ScatterplotLayer({
      id: 'scatterplot',
      getPosition: d => [d.location.longitude, d.location.latitude],
      getFillColor: d => [114, 19, 108],
      getRadius: d => 5,
      opacity: 0.5,
      pickable: true,
      radiusMinPixels: 5,
      radiusMaxPixels: 30,
      data,
      onHover,
      onClick,
      ...settings
    });
}
