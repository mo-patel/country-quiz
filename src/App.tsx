import './App.css';
import { QuizCardComponent } from './components/QuizCardComponent';
import data from "./data/sample-data.json"

function App() {
  return (
    <div className="App">
      <QuizCardComponent data={data} />
    </div>
  );
}

export default App;
