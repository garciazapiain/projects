import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from 'reactstrap';

import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { googleKey } from '../../key.js';
const mapStyles = {
  width: '54vw',
  height: '80vh'
};

// const restaurantsPosition = [
//   {
//     name: "rest A",
//     latitude: 50.20,
//     longitude: 14.49,
    
//   },
//   {
//     name: "rest C",
//     latitude: 50.08,
//     longitude: 14.31,

//   },
//   {
//     name: "rest B",
//     latitude: 50.09,
//     longitude: 14.72,

//   },
//   {
//     name: "rest D",
//     latitude: 49.90,
//     longitude: 14.43,

//   },
// ]

const InfoWindowWrapper = (props) => {

  return(
    <InfoWindow
            position={{
              lat: props.latitude,
              lng: props.longitude
            }}
          >
            <div>
              <h2>{props.name}</h2>
            </div>
          </InfoWindow>
   
  )
}

const NewMap = (props) => {
  const { restaurantsPosition } = props;
  const [selectedRestaurant, setSelectedRestaurant] = useState(false);
  const [restaurantCoordsLat, setRestaurantCoordsLat] = useState();
  const [restaurantCoordsLng, setRestaurantCoordsLng] = useState();
  const [restaurantId, setRestaurantId] = useState();
  const [ loading, setLoading ] = useState(true);
  // const { mapRef } = props

  const handleMouseClick = async(lat, long) => {
    console.log('clicking')
    console.log('clicking', lat, long)
    latvar = lat;
    longvar = long;
    setSelectedRestaurant(true);
    console.log("displaying the variable", latvar, longvar)
    setRestaurantCoordsLat(lat)
    setRestaurantCoordsLng(long)
    console.log("state coord lat", restaurantCoordsLat)
    console.log(" state coord long", restaurantCoordsLng)
  }

  useEffect(() => {
    console.log('restauant pos', restaurantsPosition)
  }, [props.restaurantsPosition])

  console.log("displaying the state", restaurantCoordsLat)

  console.log(props);
  console.log('pos map', restaurantsPosition)
  return (
        <GoogleMap
          defaultZoom={10.5}
          defaultCenter={{ lat: 50.072, lng: 14.49 }}
          defaultOptions={{ styles: mapStyles }}
        >
          {
            props.restCoords !== null && (
              <Marker
                  onClick={() => {
                    setRestaurantCoordsLng(long)
                    setRestaurantCoordsLat(lat);
                    setRestaurantId(key);

                    setSelectedRestaurant(!selectedRestaurant);
                    console.log('key', key)

                    console.log('restaurantid', restaurantId)
                    console.log(restaurantsPosition[restaurantId])
                    console.log(restaurantsPosition[restaurantId].name)

                  }}
                  position={{
                    lat: props.restCoords.lat,
                    lng: props.restCoords.lon
                  }}
                />
            )
          }
          {props.restCoords === null && restaurantsPosition.map((rest, key) => {
            console.log(rest.latitude)
            const lat = rest.latitude;
            const long = rest.longitude
            console.log(lat, long)
            return (
            
                <Marker
                  key={key}
                  
                  onClick={() => {
                    setRestaurantCoordsLng(long)
                    setRestaurantCoordsLat(lat);
                    setRestaurantId(key);

                    setSelectedRestaurant(!selectedRestaurant);
                    console.log('key', key)

                    console.log('restaurantid', restaurantId)
                    console.log(restaurantsPosition[restaurantId])
                    console.log(restaurantsPosition[restaurantId].name)

                  }}
                  position={{
                    lat: lat,
                    lng: long
                  }}
                />
            )
          })}

{selectedRestaurant && (
 
  
    <InfoWindow
  position={{
    lat: restaurantCoordsLat ,
    lng: restaurantCoordsLng
  }} >
    <div>
      {restaurantId ? <p>{restaurantsPosition[restaurantId].name}</p> :<p>click again</p>}
    </div>
 
</InfoWindow> )
  
}

    </GoogleMap>
  )
}

const MapWrapped = withScriptjs(withGoogleMap(NewMap));

export default function App(props) {
  const { restaurantsPosition } = props; 
  if (!restaurantsPosition) {
    return (
      <div>
          Loading...
      </div>
    )
} return (
    <Row className="mapRow">
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleKey}`}
        loadingElement={<Col sm="12"  />}
        containerElement={<Col sm="12" />}
        mapElement={<div className="mapElement" />}
        restCoords={props.restCoords}
        restaurantsPosition={restaurantsPosition}
        
        // mapRef={props.mapRef}
        
      />
    </Row>
  );
}

// class NewMap extends Component {

//   constructor(props) {
//     super(props);
//     console.log('this.props', this.props)
//     this.state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
//       markerObjects: []
//     }
//     this.onMarkerClick = this.onMarkerClick.bind(this)
//     this.onClose = this.onClose.bind(this)

//     this.onMarkerMounted = element => {
//       this.setState(prevState => ({
//       markerObjects: [...prevState.markerObjects, element.marker]
//       }))
//     };
//   };


//   onMarkerClick(props, marker, e) {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });

//   }

//   onClose(props) {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };

//   render() {
//     console.log('rest', restaurantsPosition)

//     const restaurantPositionMarkers = restaurantsPosition.map((rest, index) => {
//       return (
//         <Marker
//           ref={this.onMarkerMounted}
//           key={`mapMarker-${index}`}
//           onClick={this.onMarkerClick}
//           name={rest.name}
//           latitude={rest.latitude}
//           longitude={rest.longitude}
//         />
//       )
//     })
//     console.log('resMarkers', restaurantPositionMarkers)
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//           lat: 50.065,
//           lng: 14.46
//         }}
//       >
//         {restaurantPositionMarkers}
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: googleKey
// })(NewMap);