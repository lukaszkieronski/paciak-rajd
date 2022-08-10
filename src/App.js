import React, { useState } from 'react';
import { Grid, Box } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NavigationBar } from './NavigationBar.js'
import { NavigationItems, DefaultLocation } from './NavigationItems'
import { Geolocation } from './Geolocation'
import { FooContext } from './FooContext.js';

export const App = () => {

  let [position, setPosition] = useState(undefined)

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      sx={{ height: "100vh" }}
    >
      <Geolocation update={setPosition} />
      <NavigationBar />
      <Box sx={{ flexGrow: 1 }}>
        <FooContext.Provider value={position}>
          <Routes>
            {
              NavigationItems.map((item, index) =>
                <Route path={item.loc} element={item.element} key={index} />
              )
            }
            <Route path='*' element={<Navigate to={DefaultLocation} />} />
          </Routes>
        </FooContext.Provider>
      </Box>
    </Grid>
  )
}
