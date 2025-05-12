import React from 'react';
import style from './Subtitle.module.css'

const Subtitle = ({children}) => {
    return (
        <div>
            <h2 className={style.subtitle}>{children}</h2>
        </div>
    );
};

export default Subtitle;