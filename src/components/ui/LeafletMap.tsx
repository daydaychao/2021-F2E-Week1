import events from 'events'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

interface Location {
  lat: number
  lon: number
}

export function LeafletMap({ lat, lon }: Location) {
  return (
    <>
        <MapContainer className="h-full" center={[lat,lon]} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat,lon]}>
          </Marker>
        </MapContainer>
    </>
  )


}
