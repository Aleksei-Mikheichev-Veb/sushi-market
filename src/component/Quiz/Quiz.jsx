import React, {useEffect, useState} from 'react';
import style from './Quiz.module.css';
import Delivery from "./Delivery";
import Pickup from "./Pickup";
import WayOfReception from "./WayOfReception";
import { useSelector} from "react-redux";
import HowQuickly from "./HowQuickly";
import ContactDetails from "./ContactDetails";
import ThankYou from "./ThankYou";

const Quiz = ({setQuizActive}) => {
    const state = useSelector(state => state)
    const step = useSelector(state => state.quiz.step)
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
            title: 'Способ получения заказа',
            variants: <WayOfReception/>
        },
        {
            variants: [
                {
                    title: 'Куда будем доставлять?',
                    variants: <Delivery />
                },
                {
                    title: 'Укажите пункт самовывоза',
                    variants:<Pickup />
                },
            ]
        },
        {
            title: 'Когда нам приготовить',
            variants: <HowQuickly />
        },
        {
            title: 'Контактные данные',
            variants: <ContactDetails/>
        }
    ];

    useEffect(() => {
        if(step !== 1){
            setCurrentQuestion(questions[step])
        }else {
            if(state.quiz.quiz[0] === 'Доставка'){
                setCurrentQuestion(questions[step].variants[0])
            } else {
                setCurrentQuestion(questions[step].variants[1])
            }
        }
    }, [step]);
    return (
        <div className={style.quiz} onClick={() => setQuizActive(false)}>
            <div className={style.quiz_contant} onClick={e => e.stopPropagation()}>
                <div className={style.quiz_title}>{step < 4 && currentQuestion.title}</div>
                <div className={style.quiz_answer}>
                    {step === 4 ? <ThankYou/> : currentQuestion.variants}
                </div>
            </div>
        </div>
    );
};

export default Quiz;