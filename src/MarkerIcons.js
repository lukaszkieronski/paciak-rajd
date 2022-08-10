import MHomeIcon from '@mui/icons-material/Home';
import MSportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import { divIcon } from 'leaflet'
import { pink } from '@mui/material/colors'
import { renderToString } from 'react-dom/server'

export const HomeIcon = divIcon({
    html: renderToString(<MHomeIcon color="primary" style={{ fill: pink[400] }} />),
    className: '',
    iconSize: [50, 50],
})

export const CurrentPositionIcon = divIcon({
    html: renderToString(<MSportsMotorsportsIcon color="primary" style={{ fill: pink[400] }} />),
    className: '',
    iconSize: [50, 50],
})