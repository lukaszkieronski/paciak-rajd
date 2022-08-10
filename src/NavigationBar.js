import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Link } from 'react-router-dom';

import { NavigationItems, DefaultLocation } from './NavigationItems';

export const NavigationBar = () => {
    const [value, setValue] = useState(DefaultLocation)
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            {
                NavigationItems.map((item, index) =>
                    <BottomNavigationAction
                        component={Link}
                        to={`/${item.loc}`}
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