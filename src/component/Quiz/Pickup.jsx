import React from 'react';
import MyRadio from "../UI/MyRadio/MyRadio";
import style from './Quiz.module.css';
import {useForm} from "react-hook-form";
import {setAnswerQuiz, setStep} from "../../Redux/quizReducer";
import {useDispatch, useSelector} from "react-redux";
import Form from "../UI/MyForm/Form";
import ButtonsControl from "../UI/MyForm/ButtonsControl";

const Pickup = () => {
    const addresses = [
        "г. Кострома м/р-н 3-ий Давыдовский д.32 ТЦ 'Авокадо'",
       " г. Кострома м/р-н Паново д.15 ТЦ 'Паново'"
    ];
    const dispatch = useDispatch();
    const step = useSelector(state => state.quiz.step);
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data) => {
        dispatch(setAnswerQuiz(step + 1, data.address))
        dispatch(setStep(step + 1))
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.pickup}>
                <MyRadio register={register} errors={errors} inputsText={addresses} required={'Выберите пункт выдачи'}  name={'address'}/>
            </div>
            <ButtonsControl />
        </Form>

    );
};

export default Pickup;