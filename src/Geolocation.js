import React, { useEffect } from 'react'

export const Geolocation = ({ update }) => {

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition((position) => {
            const latlng = { lat: position.coords.latitude, lon: position.coords.longitude }
            update(latlng)
        }, (error) => {
            alert(error.message)
        })

        return () => {
            navigator.geolocation.clearWatch(watchId)
        }
    }, [update])

    return (
        <div />
    )
}

export default Geolocation