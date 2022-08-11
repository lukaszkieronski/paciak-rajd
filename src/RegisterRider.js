import React from 'react'
import { QrReader } from 'react-qr-reader';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';

export const RegisterRider = ({ rider }) => {
    const validate = (text) => {
        try {
            const newRider = JSON.parse(text)
            if (newRider.id && newRider.name) rider.set(newRider)

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Container style={{ maxWidth: 500 }}>
            <Typography variant="h5" component="div">Zeskanuj dane kierowcy</Typography>
            <Button onClick={() => { rider.set({ id: 1, name: "Kiel" }) }}>Fake scan</Button>
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        validate(result?.text);
                    }
                }}
                style={{ width: '100%' }}
            />
        </Container>
    );
};

