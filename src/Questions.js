import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export const Questions = (props) => {
    const [data, setData] = useState('No result');

    return (
        <>
            <QrReader

                onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                    }

                    if (!!error) {
                        setData(error.message);
                    }
                }}
                style={{ width: '100%' }}
            />
            <p>{data}</p>
        </>
    );
};

export default Questions