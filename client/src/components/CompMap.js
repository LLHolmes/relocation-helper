import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MainContainer = ({ comps }) => {

  return (
    <div className="CompMap" style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_GOOGLE_MAP_API }}
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

const mapStateToProps = state => {
  return {
    comps: state.search.comps
  }
}

export default connect(mapStateToProps)(MainContainer);
