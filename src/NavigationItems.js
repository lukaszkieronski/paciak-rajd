import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import PlaceIcon from '@mui/icons-material/Place'
import MapIcon from '@mui/icons-material/Map'
import InfoIcon from '@mui/icons-material/Info'

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

export const DefaultNavigation = NavigationItems.find(() => true).loc