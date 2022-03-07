import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "50%%",
  height: "50%%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        className="google-map"
        google={this.props.google}
        zoom={14}
        style={{ width: "2-%" }}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
})(MapContainer);
