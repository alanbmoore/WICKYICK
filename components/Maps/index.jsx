import React from "react";

function MapContainer() {
  return <div>MapContainer</div>;
}

export default MapContainer;
// import React, { Component } from "react";
// import {
//   GoogleMap,

//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";

// const mapStyles = {
//   width: "50%%",
//   height: "50%%",
// };

// export class MapContainer extends Component {
//   getCenter() {
//     const { marker } = this.props;
//     return marker.length > 0 && marker[0]
//       ? {
//           lng: marker.length > 0 && marker[0]?.longitude,
//           lat: marker.length > 0 && marker[0]?.latitude,
//         }
//       : {
//           lng: -122.6067583,
//           lat: 45.3573429,
//         };
//   }

//   render() {
//     const { marker } = this.props;

//     return (
//       this.props.marker.length > 0 && (
//         <GoogleMap
//           className="google-map"
//           google={this.props.google}
//           zoom={14}
//           style={mapStyles}
//           initialCenter={this.getCenter()}
//         >
//           {this.props.marker.map((marker) => {
//             return (
//               <Marker
//                 key={marker?.id}
//                 position={{ lat: marker?.latitude, lng: marker?.longitude }}
//               >
//                 <InfoWindow>
//                   <div>{marker?.shelter}</div>
//                 </InfoWindow>
//               </Marker>
//             );
//           })}

//           <InfoWindow onClose={this.onClose}>
//             <div>aas</div>
//           </InfoWindow>
//         </GoogleMap>
//       )
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
// })(MapContainer);
