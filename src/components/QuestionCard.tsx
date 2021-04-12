import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: string;
    questionNum: number;
    totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions }) => {

    return (
        <div>
            <p>
                Question: {questionNum} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {answers.map(answer => (
                    <div>
                        <button onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}