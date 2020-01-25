import React from 'react';
// import mapboxgl from 

export interface MapProps {
  
}
 
export interface MapState {
  
}
 
class Map extends React.Component<MapProps, MapState> {

  // componentDidMount() {
  //   this.map = new mapboxgl.Map({
  //     container: this.mapContainer,
  //     style: 'mapbox://styles/mapbox/streets-v9'
  //   });
  // }
  // componentWillUnmount() {
  //   this.map.remove();
  // }

  

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return (
      <div id='map'></div>
        <script>
        mapboxgl.accessToken = 'pk.eyJ1IjoiaW1wZWRhbmNlIiwiYSI6ImNrNXR1OHA1YTB6bHEzbG1sOGlvczllbGQifQ.x4hErx7q1XqH9qHfrTFwJw'
        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v9', 
          center: [-87.661557, 41.893748],
          zoom: 10.7
        });
        // code from the next step will go here
        </script>
    )

    // return <div style={style} ref={el => this.mapContainer = el} />;
  }
}
 
export default Map;