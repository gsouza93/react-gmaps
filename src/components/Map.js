import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
	constructor(props) {
    super(props);
    this.state = {title: '',latitude: '',longitude: ''};

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeLatitude = this.handleChangeLatitude.bind(this);
    this.handleChangeLongitude = this.handleChangeLongitude.bind(this);
   }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeLatitude(event) {
    this.setState({latitude: event.target.value});
  }

  handleChangeLongitude(event) {
    this.setState({longitude: event.target.value});
  }

  static defaultProps = {
    center: {
      lat: -30.0277,
      lng: -51.2287
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
      	<div style={{ margin: '20px' }}>
	        <label style={{ margin: '20px' }}>
	        	Título:&nbsp;
	        	<input type="text" value={this.state.title} onChange={this.handleChangeTitle} />
	        </label>
	        <label style={{ margin: '20px' }}>
	        	Latitude:&nbsp;
	        	<input type="text" value={this.state.latitude} onChange={this.handleChangeLatitude} />
	        </label>
	        <label style={{ margin: '20px' }}>
	        	Longitude:&nbsp;
	        	<input type="text" value={this.state.longitude} onChange={this.handleChangeLongitude} />
	        </label>
        </div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCw1Cu5QmZqsFLWq-D7m12E3Qqjjj13xWY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.state.latitude}
            lng={this.state.longitude}
            text={this.state.title}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;