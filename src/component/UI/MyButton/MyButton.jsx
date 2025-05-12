import React from 'react';
import './MyButton.css'

const MyButton = ({children, mode, ...all}) => {
    return (
            <button {...all} className={`button ${mode}`}>{children}</button>

    );
};

export default MyButton;