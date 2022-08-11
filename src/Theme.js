import { createTheme } from "@mui/material";
import { blueGrey } from '@mui/material/colors'



export const ApplicationTheme = createTheme({
    palette: {
        type: 'light',
        background: {
            default: blueGrey[200],
        },
    }
})

export default ApplicationTheme