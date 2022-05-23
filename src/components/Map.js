import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import './Map.css'

function Map(props) {
  return (
    <div className="map">
      <MapContainer center={[props.lat, props.long]} zoom={2.75} scrollWheelZoom={true}>
        <TileLayer
          attribution=''
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[props.lat, props.long]}>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map