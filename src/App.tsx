import './App.css';
import {useState} from 'react';
import { QuestionCard } from './components/QuestionCard';
import { fetchQuestions, Difficulty, QuestionState } from './API';

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true); 
  
  console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
  // setQuestions
  const startQuiz = async () => {}
  const nextQuestion = async () => {}
  const checkAnswer   = (e: React.MouseEvent<HTMLButtonElement>) => {}
  return (
    <div className="App">
      <h1>The Quiz App</h1>
      <button onClick={startQuiz}>Start</button>
      <p>Score: </p>
      <p>Loading...</p>

      {/* <QuestionCard 
        questionNum = {number + 1}
        totalQuestions = {TOTAL_QUESTIONS}
        question = {questions[number].question}
        answers = {questions[number].answer}
        userAnswer = {userAnswers? userAnswers[number] : undefined}
        callback = {checkAnswer}
        /> */}
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
