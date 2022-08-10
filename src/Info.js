import { Container } from '@mui/system';
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export const Info = (props) => {
    const [data, setData] = useState('No result');

    const resultCb = (result, error) => {
        if (!!result) {
            setData(result?.text)
        }
    }


    return (
        <Container style={{ maxWidth: 500 }}>
            <QrReader
                onResult={resultCb}
            />
            <p>{data}</p>
        </Container>
    );
};

export default Info