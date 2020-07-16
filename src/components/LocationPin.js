import React from 'react';
import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = (props) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon"/>
        <p className="pin-text">{props.text}</p>
    </div>
);

export default LocationPin;