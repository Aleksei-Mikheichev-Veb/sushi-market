import React from 'react';
import style from './MyInput.module.css';
import Error from "../MyForm/Error";

const MyInput = ({ register, name, errors, required, pattern, ...props }) => {
    return (
        <div className={style.inputWrapper}>
            <input
                {...(register && { ...register(name, { required, pattern })}) }
                {...props}
                className={style.input}
            />
            {errors && errors[name] && <Error>{errors[name]?.message}</Error>}
        </div>
    );
};

export default MyInput;