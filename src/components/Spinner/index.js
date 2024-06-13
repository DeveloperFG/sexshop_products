import React, { useEffect, useState } from 'react';
import SyncLoader from "react-spinners/SyncLoader";

import './styles.css'




const Spinner = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div className='containerSpiner'>
            <SyncLoader
                color={'black'}
                loading={loading}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>

    )
};

export default Spinner;