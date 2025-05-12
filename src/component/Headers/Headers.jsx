import React from 'react';
import HeaderCommon from "./HeaderCommon/HeaderCommon";
import style from './Headers.module.css'
const Headers = () => {
    return (
        <header className={style.container}>
            <HeaderCommon/>
        </header>
    );
};

export default Headers;
