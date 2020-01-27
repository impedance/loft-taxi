import React from 'react';
import mapboxgl from 'mapbox-gl';

export interface MapProps {}
 
export interface MapState {}

const accessToken: string = 'pk.eyJ1IjoiaW1wZWRhbmNlIiwiYSI6ImNrNXR1OHA1YTB6bHEzbG1sOGlvczllbGQifQ.x4hErx7q1XqH9qHfrTFwJw';
const coordinates: [number, number] = [-87.661557, 41.893748];
const zoom: number = 10.7;
const style: string = 'mapbox://styles/mapbox/streets-v9';
 
class Map extends React.Component<MapProps, MapState> {
  map: mapboxgl.Map | any;
  mapContainer: any;

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: style,
      center: coordinates,
      zoom: zoom,
      accessToken: accessToken,
    });
  }
  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style: object = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}
 
export default Map;