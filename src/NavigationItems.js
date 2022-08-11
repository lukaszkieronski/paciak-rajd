import {
    QuestionAnswer as QuestionAnswerIcon,
    Place as PlaceIcon,
    Map as MapIcon,
    Info as InfoIcon
} from '@mui/icons-material'

import { Map } from './Map'
import { Places } from './Places'
import { Questions } from './Questions'
import { Info } from './Info'

export const NavigationItems = [
    {
        loc: '/map',
        label: 'Map',
        icon: <MapIcon />,
        element: Map
    },
    {
        loc: '/places',
        label: 'Places',
        icon: <PlaceIcon />,
        element: Places
    },
    {
        loc: '/questions',
        label: 'Questions',
        icon: <QuestionAnswerIcon />,
        element: Questions
    },
    {
        loc: '/info',
        label: 'Info',
        icon: <InfoIcon />,
        element: Info

    }
]

export const DefaultLocation = NavigationItems.find(() => true).loc