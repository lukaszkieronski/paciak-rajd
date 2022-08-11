import { Button, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Card } from '@mui/material';
import React from 'react';
import packageJson from '../package.json'


export const Info = ({ rider }) => {
    const clearRiderData = () => {
        rider.set(undefined)
    }

    return (
        <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={16}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Kierowca</Typography>
                        <Typography>
                            Numer: {rider.get().id}
                        </Typography>
                        <Typography>
                            Ksywka: {rider.get().name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={clearRiderData}>Usuń</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={16}>
                <Card>
                    <CardContent>
                        <Typography>Wersja: {packageJson.version}</Typography>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    );
};

export default Info