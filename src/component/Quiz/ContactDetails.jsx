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
import Error from "../UI/MyForm/Error";
import { InputMask } from '@react-input/mask';

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
                <div className={style.inputWrapper}>
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Введите номер мобильного телефона",
                            pattern: {
                                value: /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
                                message: "Введите корректный номер телефона",
                            },
                        }}
                        render={({ field }) => (
                            <InputMask
                                mask="+7 (___) ___-__-__"
                                replacement={{ _: /\d/ }}
                                value={field.value || ''}
                                onChange={(e) => {
                                    console.log('Phone input change:', e.target.value); // Отладка
                                    field.onChange(e);
                                }}
                                placeholder="Мобильный телефон"
                                type="tel"
                                className={style.input}
                            />
                        )}
                    />
                    {errors.phone && <Error>{errors.phone.message}</Error>}
                </div>
            </div>
            <ButtonsControl />
        </Form>
    );
};

export default ContactDetails;
