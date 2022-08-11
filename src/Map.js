import React, { useEffect, useRef } from 'react'
import { map, marker, tileLayer } from 'leaflet'
import "leaflet/dist/leaflet.css"


import { LocationList, MapLocations } from './MapLocations'
import { HomeIcon, CurrentPositionIcon, StarIcon } from './MarkerIcons'


export const Map = ({ location, visited }) => {

    const _map = useRef()
    const _currentPos = useRef()
    const _homePos = useRef()
    const _markers = useRef([])

    useEffect(() => {
        _map.current = map('map').setView(MapLocations.Rueda, 17);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(_map.current);

        _homePos.current = marker(MapLocations.Rueda, { icon: HomeIcon }).addTo(_map.current)
        _currentPos.current = marker(MapLocations.Rueda, { icon: CurrentPositionIcon }).addTo(_map.current)

        for (const pos of LocationList) {
            _markers.current[pos.id] = marker(pos, { icon: StarIcon, name: pos.name }).addTo(_map.current)
        }
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
        for (const id in visited) {
            _markers.current[id].remove()
        }
    }, [visited])

    useEffect(() => {
        try {
            _currentPos.current.setLatLng(location)
            _map.current.panTo(location)
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