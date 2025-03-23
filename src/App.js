import './App.css';
import Accordian from './components/accordian';
import  RandomColor  from './components/randomColor';
import { StarRating } from './components/starRating';
import ImageSlider from './components/imageSlider';
import LoadMoreButton from './components/loadMoreButton';
import Sidebar from './components/Sidebar';
import QRCodeGenerator from './components/qrCodeGenerator';
import LightDarkMode from './components/lightModeDarkModeSwitch';
import { ScrollIndicator } from './components/scrollIndicator';

function App() {
  return (
    <div className="App">
      <Accordian/>
      <RandomColor/>
      <StarRating noOfStars={5}/>
      <ImageSlider/>
      <LoadMoreButton/>
      <Sidebar/>
      <QRCodeGenerator/>
      <LightDarkMode/>
      <ScrollIndicator/>
    </div>
  );
}

export default App;
