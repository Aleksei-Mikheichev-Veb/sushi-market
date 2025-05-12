import React from 'react';
import MyRadio from "../UI/MyRadio/MyRadio";
import style from './Quiz.module.css';
import ButtonsControl from "../UI/MyForm/ButtonsControl";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setAnswerQuiz, setStep} from "../../Redux/quizReducer";
import Form from "../UI/MyForm/Form";

const HowQuickly = () => {
    const options = ['Как можно быстрее', 'Заказ ко времени'];


    const {register, handleSubmit, formState: {errors}, watch} = useForm({mode: 'onBlur'});
    const dispatch = useDispatch();
    const step = useSelector(state => state.quiz.step)

    const currentVariant = watch('howQuickly');

    const onSubmit = (data) => {
        dispatch(setAnswerQuiz(step + 1, `${data.howQuickly} ${data.time ? data.time : ''}`))
        dispatch(setStep(step + 1))
    }
    // debugger
    return (
        // <div className={style.howQuickly_box}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <MyRadio register={register} inputsText={options} required={'Выберите один вариант '} errors={errors}
                         name={'howQuickly'}/>
                {currentVariant !== 'Как можно быстрее'
                    && currentVariant !== undefined
                    && currentVariant !== null
                    && <input type="time" {...register('time', {required: 'Введите время'})}
                              min="00:00"
                              max="23:59"
                              step="60"
                              className={style.input_time}/>}
                <ButtonsControl/>
            </Form>
        // </div>
    );
};

export default HowQuickly;


// useEffect(() => {
//     setCurrentValue(how)
//     if(how !== ''){
//         setValidStep(true)
//     }else{
//         setValidStep(false)
//
//     }
// }, [how]);
// <MyRadio inputsText={options} onChange={e => setHow(e.target.value)} name={'howQuickly'}/>
// {how !== 'Как можно быстрее' && how !== '' && <input type="time"
//                                                      onChange={e => setHow(`Заказ ко времени: ${e.currentTarget.value}`)}
//                                                      required={true}
//                                                      min="00:00"
//                                                      max="23:59"
//                                                      step="60"
//                                                      className={style.input_time}/>}