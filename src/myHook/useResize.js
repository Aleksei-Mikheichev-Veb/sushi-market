import React, {useEffect, useState} from 'react';


const UseResize = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const handleResize = (e) => {
        setWidth(e.target.innerWidth)
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);
    return width;
};


export default UseResize;