import React, { useEffect, useRef } from 'react'
import { map, marker, tileLayer } from 'leaflet'
import "leaflet/dist/leaflet.css"


import { MapLocations } from './MapLocations'
import { HomeIcon, CurrentPositionIcon } from './MarkerIcons'


export const Map = ({ location }) => {

    const _map = useRef();
    const _currentPos = useRef();
    const _homePos = useRef();

    useEffect(() => {
        _map.current = map('map').setView(MapLocations.Rueda, 17);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(_map.current);

        _homePos.current = marker(MapLocations.Rueda, { icon: HomeIcon }).addTo(_map.current)
        _currentPos.current = marker(MapLocations.Rueda, { icon: CurrentPositionIcon }).addTo(_map.current)

        //_map.current.locate({ watch: true, setView: true })

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
            _currentPos.current.setLatLng(location)
            _map.current.panTo(location)
            // const from = _homePos.current.getLatLng()
            // const distance = from.distanceTo(position)
            // console.log(distance)

        } catch (error) {
            console.error(error)
        }
    }, [location])

    return (
        <React.Fragment>
            <div id='map' style={{ width: '100%', height: '100%' }}></div>
        </React.Fragment>
    )
}

export default Map