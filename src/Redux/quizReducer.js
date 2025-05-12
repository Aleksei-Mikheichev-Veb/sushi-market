import React from 'react';


const MODAL_QUIZ_ACTIVE = 'MODAL_QUIZ_ACTIVE';
const SET_ANSWER_QUIZ = 'SET_ANSWER_QUIZ';
const SET_STEP = 'SET_STEP';
const CLEAR_QUIZ = 'CLEAR_QUIZ';

const initialState = {
    modalQuizActive: false,
    step: 0,
    quiz: []
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_QUIZ_ACTIVE: {
            return {
                ...state,
                modalQuizActive: !state.modalQuizActive
            }
        }
        case SET_ANSWER_QUIZ: {
            // debugger;
            if (action.step > state.quiz.length) {
                // debugger;
                return {
                    ...state,
                    // quiz: state.quiz.push(action.value)
                    quiz: [...state.quiz, action.value]
                }
            } else {
                // debugger
                return {
                    ...state,
                    quiz: state.quiz.map((elem, index) => {
                        // debugger;
                        if (index === action.step - 1) {
                            return action.value
                        } else {
                            return elem;
                        }
                    })
                }
            }
        }
        case SET_STEP: {
            return {
                ...state,
                step: action.newStep
            }
        }
        case CLEAR_QUIZ:{
            return {
                ...state,
                quiz:[]
            }
        }

        default:return state;
    }
}

export const modalQuizActiveAC = () => ({type: MODAL_QUIZ_ACTIVE});
export const setAnswerQuiz = (step, value) => ({type: SET_ANSWER_QUIZ, step, value});
export const setStep = (newStep) => ({type: SET_STEP, newStep})
export const clearQuiz = () => ({type:CLEAR_QUIZ})


export default quizReducer;