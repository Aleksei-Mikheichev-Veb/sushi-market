import React from 'react';
import {ReactComponent as DeliveryIcon} from './../../image/icon/delivery.svg'
import {ReactComponent as Bag} from "./../../image/icon/bag.svg";
import './WayOfReception.css'
import {useDispatch, useSelector} from "react-redux";
import {setAnswerQuiz, setStep} from "../../Redux/quizReducer";
import useFetching from "../../myHook/useFetching";


const WayOfReception = ({fetching}) => {
    const step = useSelector(state => state.quiz.step);
    const dispatch = useDispatch();

    const selectVariant = (value) => {
        dispatch(setAnswerQuiz(step + 1, value))
        dispatch(setStep(step + 1))
    }

    return (
        <div className={'wayOfReception'}>
            <div onClick={() => {
                selectVariant('Доставка')
            }} className="wayOfReception_item">
                <DeliveryIcon className='wayOfReception_icon'/>
                <div className="wayOfReception_text">Доставка</div>
            </div>
            <div onClick={() => {
                selectVariant('Самовывоз')
            }} className="wayOfReception_item">
                <Bag className='wayOfReception_icon'/>
                <div className="wayOfReception_text">Самовывоз</div>
            </div>
        </div>
    );
};

export default WayOfReception;