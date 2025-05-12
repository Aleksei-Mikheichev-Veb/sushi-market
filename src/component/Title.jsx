import React from 'react';
import style from './Title.module.css'

const Title = ({children}) => {
    return (
        <div>
           <h1 className={style.title}>{children}</h1>
        </div>
    );
};

export default Title;