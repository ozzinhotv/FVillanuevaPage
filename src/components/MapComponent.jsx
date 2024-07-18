import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../../src/styles/MapComponent.css';

const MapComponent = () => {
  const [center, setCenter] = useState(null);

  useEffect(() => {
    const address = 'F4XF+X6Q, Caracas 1050, Distrito Capital';
    const geocode = async () => {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyC4R-8Rlqv4FPRrxRfHfLHH-mQ8AhlOTiQ`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const location = data.results[0].geometry.location;
        setCenter({ lat: location.lat, lng: location.lng });
      }
    }
    geocode();
  }, []);

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey='AIzaSyC4R-8Rlqv4FPRrxRfHfLHH-mQ8AhlOTiQ'>
        {center && (
          <GoogleMap
            mapContainerClassName="map"
            zoom={14}
            center={center}
          >
            <Marker position={center} />
          </GoogleMap>
        )}
      </LoadScript>
    </div>
  );
};

export default MapComponent;
