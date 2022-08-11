import { Button, CardActions, CardContent, Container, Typography } from '@mui/material';
import { Card } from '@mui/material';
import React from 'react';

export const Info = ({ rider }) => {
    const clearRiderData = () => {
        rider.set(undefined)
    }

    return (
        <Container sx={{ padding: '1em', backgroundColor: 'pink' }}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">Kierowca</Typography>
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
        </Container>
    );
};

export default Info