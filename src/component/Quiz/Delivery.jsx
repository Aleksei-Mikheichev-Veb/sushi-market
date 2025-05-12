import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import style from './Quiz.module.css';
import {useForm} from "react-hook-form";
import Form from "../UI/MyForm/Form";
import ButtonsControl from "../UI/MyForm/ButtonsControl";
import {useDispatch, useSelector} from "react-redux";
import {setAnswerQuiz, setStep} from "../../Redux/quizReducer";



const Delivery = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onBlur'});
    const dispatch = useDispatch();
    const step = useSelector(state => state.quiz.step)

    const onSubmit = (data) => {
        dispatch(setAnswerQuiz(step + 1, data))
        dispatch(setStep(step + 1))
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.delivery}>
                <MyInput register={register} name={'address'} required={'Введите адрес'} placeholder={'Улица'} errors={errors}  />
                <div className={style.delivery_row}>
                    <div>
                        <MyInput register={register} name={'house'} placeholder={'Дом'} required={'Введите номер дома'} type={'number'}
                                 errors={errors} />
                    </div>
                    <div>
                        <MyInput register={register} name={'apartment'} placeholder={'Квартира'} type={'number'} errors={errors}/>
                    </div>
                </div>
                <ButtonsControl />
            </div>
        </Form>
    );
};

export default Delivery;