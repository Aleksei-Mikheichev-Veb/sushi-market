import React from 'react';
import {MdOutlineArrowBackIos} from "react-icons/md";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import style from './ButtonsSlider.module.css';


const ButtonsSlider = ({prevRef, nextRef}) => {
    return (
        <div className={style.buttonsSlider_box}>
            <button ref={prevRef} onClick={() => console.log(prevRef)} className={style.buttonSlider + ' ' + style.buttonSlider_left}>
                <MdOutlineArrowBackIos className={style.buttonSlider_icon}/>
            </button>
            <button ref={nextRef} onClick={() => console.log(nextRef)} className={style.buttonSlider + ' ' + style.buttonSlider_right}>
                <MdOutlineArrowForwardIos className={style.buttonSlider_icon}/>
            </button>
        </div>
    );
};

export default ButtonsSlider;