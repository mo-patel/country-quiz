import { useEffect, useState } from 'react';
import './styles/App.css';
import { QuizCardComponent } from './components/QuizCardComponent';
import sampleData from "./data/sample-data.json"
import { createQuiz } from './services/quizService';
import { NewQuizResponse } from './types/NewQuizResponse';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

function App() {
  const [data, setData] = useState<NewQuizResponse>();
  const [useSample, setUseSample] = useState(false);
  useEffect(()=>{
    const loadData = async () => {
      try{
        let res = await createQuiz();
        if(res){
          return setData(res);
        }
      }catch(e){
        alert('An issue occurred retrieving the data. Check console for details. Loading sample data...');
        console.log(e);
        setUseSample(true);
        setData(sampleData);
      }
    }
    loadData();
  }, [])
  return (
    <div className="App">
      {useSample ? <div className="notifBar">Using sample data. Refresh to use live data.</div> : null}
      <div className="main">
        {data ? 
          <QuizCardComponent data={data} /> :
          <div className='loading'>
            <AiOutlineLoading3Quarters className='loadingIcon' />
            <p> The backend can take up to 20 seconds to fire up on initial load. Please be patient... </p>
          </div>
          
        }
        
      </div>
      <p className="credits">created by <a href="https://github.com/mo-patel">mo-patel</a> (Front-end) & <a href="https://github.com/Package">Package</a> (Back-end) - <a href="https://devchallenges.io/">devchallenges.io</a> </p>
    </div>
  );
}

export default App;
