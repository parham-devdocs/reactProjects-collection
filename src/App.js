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
import Tabs from './components/tabs';
const tabsData=[{header:"tab 1",content:"content 1"},{header:" tab 2",content:"content 2"},{header:"tab 3",content:"content 3"}]
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
      <Tabs tabs={tabsData}/>
    </div>
  );
}

export default App;
