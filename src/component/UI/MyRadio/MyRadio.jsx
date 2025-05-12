import React from 'react';
import style from './MyRadio.module.css';
import Error from "../MyForm/Error";


const MyRadio = ({register,required, inputsText, name,errors, ...props}) => {

    return (
        <div className={style.radio}>
            {inputsText.map((inputText, index) => {
                return <div className={style.radio_box} key={index}>
                    <label className={style.radio_row}>
                        <input {...register(name, {required: required})} type="radio" className={style.radio_radio} value={inputText} name={name} {...props}/>
                        {/*Его будем стилизовать. fake это обертка а с ::before будет точка внутри*/}
                        <span className={style.radio_fake}></span>
                        <span className={style.radio_text}>{inputText}</span>
                    </label>
                </div>
            })}
            {errors && <Error>{errors[name]?.message}</Error>}
        </div>
    );
};

export default MyRadio;