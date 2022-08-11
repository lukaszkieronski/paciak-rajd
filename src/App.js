import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';

import { MainView } from './MainView'
import { RegisterRider } from './RegisterRider';
import theme from './Theme';


export const App = () => {

  const [rider, setRider] = useState(() => {
    let rider = localStorage.getItem('rider')
    try {
      return JSON.parse(rider)
    } catch (error) {
      return undefined
    }
  })

  useEffect(() => {
    if (rider && rider.id && rider.name) localStorage.setItem('rider', JSON.stringify(rider))
    else {
      localStorage.removeItem('rider')
      setRider(undefined)
    }
  }, [rider])

  const riderObj = useMemo(() => {
    return {
      get: () => rider,
      set: setRider
    }
  }, [rider])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {rider ? <MainView rider={riderObj} /> : <RegisterRider rider={riderObj} />}
      </ThemeProvider>
    </React.Fragment>
  )
}
