import './App.css';
import { QuestionCard } from './components/QuestionCard';

function App() {

  const startQuiz = async()=>{

  }

  const nextQuestion = async()=>{

  }
  
  return (
    <div className="App">
      <h1>The Quiz App</h1>
      <button onClick={startQuiz}>Start</button>
      <p>Score: </p>
      <p>Loading...</p>
      <QuestionCard/>
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
