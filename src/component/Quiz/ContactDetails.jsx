import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import style from './Quiz.module.css';
import {useForm, Controller} from "react-hook-form";
import {clearQuiz, setAnswerQuiz, setStep} from "../../Redux/quizReducer";
import Form from "../UI/MyForm/Form";
import {useDispatch, useSelector} from "react-redux";
import ButtonsControl from "../UI/MyForm/ButtonsControl";
import SendOrder from "../../sendMessage/SendOrder";
import {clearBasket} from "../../Redux/baskerReducer";
import useFetching from "../../myHook/useFetching";
import MaskedInput from 'react-input-mask';

const ContactDetails = () => {
    const {register, handleSubmit, formState: {errors}, control,watch} = useForm({mode: 'onBlur'});
    const dispatch = useDispatch();
    const step = useSelector(state => state.quiz.step)
    const state = useSelector(state => state)

    const [isFetching, error, fetching] = useFetching( async (...arg) => {
        SendOrder(...arg).then(response => {
            dispatch(setStep(step + 1))
        })
    })
    const onSubmit = (data) => {
        dispatch(setAnswerQuiz(step + 1, data))
        fetching(state, data)
    }

    // debugger;
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.contactDetail}>
                {isFetching && <div className={style.preloader}></div>}
                <MyInput register={register} errors={errors} name={'name'} required={'Введите Ваше имя'} placeholder={'Ваше имя'}/>
                <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: true,
                    }}
                    render={({ field }) => (
                        <MaskedInput
                            mask="+7(999) 999 9999"
                            maskChar="_"
                            value={field.value}
                            onChange={field.onChange}
                        >
                            {(inputProps) => (
                                <MyInput register={register} errors={errors} name={'phone'} required={'Введите номер мобильного телефона'}
                                         type={'tel'}
                                         placeholder={'Мобильный телефон'}
                                         pattern={{
                                             // value: /^((\+7|7|8)+([0-9]){10})$/,
                                             value: /^(\+)?(\d{1,2})?[( .-]*(\d{3})[) .-]*(\d{3,4})[ .-]?(\d{4})$/,
                                             message:'Введите коррекный номер телефона'
                                         }}
                                />
                            )}
                        </MaskedInput>
                    )}
                />
            </div>
            <ButtonsControl />
        </Form>
    );
};

export default ContactDetails;