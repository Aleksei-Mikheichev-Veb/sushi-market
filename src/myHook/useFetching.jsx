import React, {useState} from 'react';

const useFetching = (callback) => {
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState('')
    const fetching = async (...arg) => {
        try{
            setIsFetching(true)
            await callback(...arg)
        }
        catch(e){
            setError(e.message)
        }
    }

    return [isFetching, error, fetching]
};

export default useFetching;