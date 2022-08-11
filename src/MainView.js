import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NavigationBar } from './NavigationBar.js'
import { NavigationItems, DefaultNavigation } from './NavigationItems'
import { Geolocation } from './Geolocation'
import { MapLocations } from './MapLocations'

export const MainView = ({ rider }) => {

    const [location, setLocation] = useState(() => {
        let location = localStorage.getItem('location')
        return location ? JSON.parse(location) : MapLocations.Rueda
    })
    useEffect(() => {
        localStorage.setItem('location', JSON.stringify(location))
    }, [location])

    const [elementProps, setElementProps] = useState({ location, rider })

    useEffect(() => {
        setElementProps(p => { return { ...p, location: location } })
    }, [location])


    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            sx={{ height: "100vh" }}
        >
            <Geolocation update={setLocation} />
            <NavigationBar />
            <Box sx={{ flexGrow: 1 }}>
                <Routes>
                    {
                        NavigationItems.map((item, index) =>
                            <Route path={item.loc} element={React.createElement(item.element, { ...elementProps })} key={index} location={location} />
                        )
                    }
                    <Route path='*' element={<Navigate to={DefaultNavigation} />} />
                </Routes>
            </Box>
        </Grid>
    )
}