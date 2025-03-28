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
import ModalTest from './components/modal/modal-test';
import GithubProfileFinder from './components/githubProfileFinder';
import AutoComletionWithApi from './components/autocompletion-with-API';
import TicTacToe from './components/ticTacToe';
import UseOutsideClickComponent from './components/useOutsideClick/test';
import UserWindowResizeComponent from './components/useWindowResize/useWindowResizeComponent';
import  ScrollToTopBottom  from './components/scrollToTop_Button';
import ScrollToParticularSection  from "./components/ScrollToParticularSection";
import WeatherApp from './components/weatherApp';
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
      <ModalTest/>
      <GithubProfileFinder/>
      <AutoComletionWithApi/>
      <TicTacToe/>
      <UseOutsideClickComponent/>
      <UserWindowResizeComponent/>
      <ScrollToTopBottom/>
      <ScrollToParticularSection/>
      <WeatherApp/>
    </div>
  );
}

export default App;
