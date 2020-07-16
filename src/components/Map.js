import React from 'react';
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'

const api_key = 'AIzaSyCJdD2LSX1cvn0MIYhIpRDkKlMEzFG_Ir0';

function Map(props) {
    return (
        <div className="Map">
            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{key: api_key}}
                    defaultCenter={props.location}
                    defaultZoom={props.zoomLevel}>
                    <LocationPin
                        lat={props.location.lat}
                        lng={props.location.lng}
                        text={props.location.address}
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default Map;
