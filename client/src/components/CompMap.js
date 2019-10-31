import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// if (navigator.geolocation) {
//      navigator.geolocation.getCurrentPosition(function (position) {
//          initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//          map.setCenter(initialLocation);
//      });
//  }

// const CompMap = ({ comps }) => {
// SHOULD I ADD A MAP CENTER & ZOOM TO REDUX & HAVE IT UPDATED W/SEARCH???
class CompMap extends React.Component {

  // static defaultProps = {
  //   center: {
  //     lat: 39.8283,
  //     lng: 265.5795
  //   },
  //   zoom: 3
  // };

  render() {
    console.log(this.props.map.center)
    return (
      <div className="CompMap" style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
          center={this.props.map.center}
          zoom={this.props.map.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comps: state.search.comps,
    map: state.map
  }
}

export default connect(mapStateToProps)(CompMap);

// For CORS error:
// const ZWSID = process.env.REACT_APP_ZWSID;
//
// const zillowSearchBase = `https://cors-anywhere.herokuapp.com/http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${ZWSID}`
