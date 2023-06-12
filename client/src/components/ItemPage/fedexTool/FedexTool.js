import React, { useEffect } from 'react';
import axios from 'axios';

function FedexTool () {

    const useEffect = (() => {
        const fetchData = async () => {
            const input = {/* Your JSON payload */}
            try {
                const response = await axios.post(
                    'https://apis-sandbox.fedex.com/rate/v1/rates/quotes',
                    input,
                    {
                        headers: {
                            'content-type': "application/json",
                            "X-locale": "en_US",
                            "Authorization": "Bearer  "

                    },
                    }
                )
                console.log(response.data);
            } catch (error) {
              console.error(error);

            }
        }
        fetchData();
    }, [])


    return (
        <>
        <div>
            FedexToolBox
        </div>
        </>
    )
}