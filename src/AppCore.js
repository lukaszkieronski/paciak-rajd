import React, { useState, useMemo } from 'react';
import { Grid, Box } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NavigationBar } from './NavigationBar.js'
import { NavigationItems, DefaultNavigation } from './NavigationItems'
import { Geolocation } from './Geolocation'
import { MapLocations } from './MapLocations'
import { LocationTracker } from './LocationTracker'

export const AppCore = ({ rider }) => {
    const [location, setLocation] = useState(MapLocations.Rueda)
    const [visited, setVisited] = useState([])

    const elementProps = useMemo(() => {
        return {
            location,
            rider
        }
    }, [location, rider])


    return (
        <React.Fragment>
            <Geolocation update={setLocation} />
            <LocationTracker />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                sx={{ height: "100vh" }}
            >
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
        </React.Fragment>
    )
}