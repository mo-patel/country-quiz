import { useEffect, useState } from 'react';
import './App.css';
import { QuizCardComponent } from './components/QuizCardComponent';
import sampleData from "./data/sample-data.json"
import { createQuiz } from './services/quizService';

function App() {
  const [data, setData] = useState();
  useEffect(()=>{
    const loadData = async () => {
      let res = await createQuiz();
      if(res){
        setData(res);
      }
    }
    loadData();
  }, [])
  return (
    <div className="App">
      <div className="main">
        {data ? 
          <QuizCardComponent data={data} /> :
          <p> Loading... </p>
        }
        
      </div>
      <p className="credits">created by <a href="https://github.com/mo-patel">mo-patel</a> (Front-end) & <a href="https://github.com/Package">Package</a> (Back-end) - <a href="https://devchallenges.io/">devchallenges.io</a> </p>
    </div>
  );
}

export default App;
