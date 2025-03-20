import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import  RandomColor  from './components/randomColor';
import { StarRating } from './components/starRating';

function App() {
  return (
    <div className="App">
      <Accordian/>
      <RandomColor/>
      <StarRating noOfStars={5}/>
    </div>
  );
}

export default App;
