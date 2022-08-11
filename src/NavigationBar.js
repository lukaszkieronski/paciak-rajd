import React, { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Link, useLocation } from 'react-router-dom';

import { NavigationItems } from './NavigationItems';

export const NavigationBar = () => {

    const location = useLocation()
    const [selected, setSelected] = useState(location.pathname)

    useEffect(() => {
        if (selected !== location.pathname) setSelected(location.pathname)
    }, [location, selected])

    return (
        <BottomNavigation
            showLabels
            value={selected}
            onChange={(event, newValue) => {
                setSelected(newValue);
            }}
        >
            {
                NavigationItems.map((item, index) =>
                    <BottomNavigationAction
                        component={Link}
                        to={item.loc}
                        value={item.loc}
                        label={item.label}
                        icon={item.icon}
                        key={index}
                    />
                )
            }
        </BottomNavigation>)
}

export default NavigationBar;