import React from 'react';
import MyButton from "../MyButton/MyButton";
import './Form.css';
import {useDispatch, useSelector} from "react-redux";
import {setStep} from "../../../Redux/quizReducer";

const ButtonsControl = ({...props}) => {
    const dispatch = useDispatch();
    const step = useSelector(state => state.quiz.step)


    return (
        <div className={'buttonsControl'}>
            <MyButton onClick={() => {
                dispatch(setStep(step - 1))

            }} type={'button'} mode={'buttonWithBorder'}>Назад</MyButton>
            {step < 3
                ? <MyButton type={'submit'}  mode={'buttonWithBorder'}>Продолжить</MyButton>
                : <MyButton type={'submit'} mode={'buttonWithBorder'}>Отправить</MyButton>}
        </div>
    );
};

export default ButtonsControl;