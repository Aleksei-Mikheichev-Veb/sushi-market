import React from 'react';
import style from './MyInput.module.css';
import Error from "../MyForm/Error";


const MyInput = ({register, name, errors, required,pattern,  ...props}) => {
    // debugger;
    return (
        <>
            {register
                ? <input
                // Для react-hook-form
                {...register(name, {required: required,pattern: {value:pattern?.value, message:pattern?.message} })}
                // Получаемые значения {value, onChange, placeholder}
                {...props}
                className={style.input}
            />
            : <input
                    // Получаемые значения {value, onChange, placeholder}
                    {...props}
                    className={style.input}
                />
            }

            {errors && errors[name] && <Error>{errors[name]?.message}</Error>}
        </>
    );
};

export default MyInput;