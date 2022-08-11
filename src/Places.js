import { Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { LocationList } from './MapLocations'

export const Places = ({ visited }) => {

    let pendingList = useMemo(() => {
        return LocationList.filter((place) => { return !(place.id in visited) })
    }, [visited])

    let visitedList = useMemo(() => {
        return LocationList.filter((place) => { return place.id in visited })
    }, [visited])

    return (
        <Grid container spacing={2} sx={{ p: 2 }}>
            {pendingList.length > 0 && <Grid item xs={16}>
                <Card>
                    <CardContent>
                        <Typography variant='h5'>Punkty nieodwiedzone</Typography>
                        {
                            pendingList.map((location) =>
                                <Typography key={location.id}>
                                    {location.id} {location.name}
                                </Typography>
                            )
                        }
                    </CardContent>
                </Card>
            </Grid>
            }

            {visitedList.length > 0 && <Grid item xs={16}>
                <Card>
                    <CardContent>
                        <Typography variant='h5'>Punkty odwiedzone</Typography>
                        {
                            visitedList.map((location) =>
                                <Typography key={location.id}>
                                    {location.id} {location.name}
                                </Typography>
                            )
                        }
                    </CardContent>
                </Card>
            </Grid>
            }


        </Grid>
    )
}

export default Places