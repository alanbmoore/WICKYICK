import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const mapStyles = {
  width: "50%%",
  height: "50%%",
};

export class MapContainer extends Component {
  render() {
    const { marker } = this.props;
    return (
      this.props.marker.length > 0 && (
        <Map
          className="google-map"
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          // initialCenter={{
          //   lng: marker && marker[0]?.longitude,
          //   lat: marker && marker[0]?.latitude,
          // }}
        >
          {this.props.marker.map((marker) => {
            return (
              <Marker
                key={marker?.id}
                position={{ lat: marker?.latitude, lng: marker?.longitude }}
              >
                <InfoWindow>
                  <div>{marker?.shelter}</div>
                </InfoWindow>
              </Marker>
            );
          })}

          <InfoWindow onClose={this.onClose}>
            <div>aas</div>
          </InfoWindow>
        </Map>
      )
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
})(MapContainer);
