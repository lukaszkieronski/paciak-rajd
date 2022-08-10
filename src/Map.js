import React, { useContext, useEffect, useRef } from 'react'
import { map, marker, tileLayer } from 'leaflet'
import "leaflet/dist/leaflet.css"


import { MapLocations } from './MapLocations'
import { HomeIcon, CurrentPositionIcon } from './MarkerIcons'
import { FooContext } from './FooContext'


export const Map = () => {

    const _map = useRef();
    const _currentPos = useRef();
    const _homePos = useRef();

    const position = useContext(FooContext)

    useEffect(() => {
        _map.current = map('map').setView(MapLocations.Rueda, 17);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(_map.current);


        _homePos.current = marker(MapLocations.Rueda, { icon: HomeIcon }).addTo(_map.current)
        _currentPos.current = marker(MapLocations.Rueda, { icon: CurrentPositionIcon }).addTo(_map.current)

        _map.current.locate({ watch: true, setView: true })

        _map.current.on('locationfound', location => {
            _currentPos.current.setLatLng(location)
        })

        return () => {
            _map.current.stopLocate()
            _map.current.remove()
        }
    }, [])

    useEffect(() => {
        try {
            _currentPos.current.setLatLng(position)
            // _map.current.flyTo(position)
            const from = _homePos.current.getLatLng()
            const distance = from.distanceTo(position)
            console.log(distance)

        } catch (error) {
            console.log(error)
        }
    }, [position])

    return (
        <React.Fragment>
            <div id='map' style={{ width: '100%', height: '100%' }}></div>
        </React.Fragment>
    )
}

export default Map