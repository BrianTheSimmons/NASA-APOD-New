import { useState } from 'react'; 
import axios from 'axios';
import './App.css';
import { GiAstronautHelmet } from 'react-icons/gi';
import Apod from './components/Apod';
import {useDatePicker} from './components/Datepicker';

function App() {

  const { render, selectedDate } = useDatePicker();
  const [ apodUrl, setApodUrl ] = useState('')
  const [ title, setTitle ] = useState('Apod Title');
  const [ desc, setDesc ] = useState('Apod Description');
  const [ apodIsShown, showApod ] = useState(false);

  let API_KEY = 'bdEGU1QkUUkeD4ghVmYsgojABstcMOQ7GhsT7OCQ';
  let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${selectedDate}`;

  const getApod = () => {
    
    axios.get(url).then(res => {
      setApodUrl(res.data.url)
      setTitle(res.data.title)
      setDesc(res.data.explanation)
    })
    showApod(true);
  }

  return (
    <div className="App">
      <div className='header-wrap'>
        <h1>NASA Apod</h1>
        <p className='lead'>Explore the universe with the NASA Astronomy Picture of the Day, or APOD for short!</p>
        <p>You can use the date picker below to select the APOD for a specific day. Once you've made your selection, just click the "Get The APOD" button and enjoy unlocking a secret of the cosmos!</p>
      </div>
      <div className='selection-wrapper'>
        <button onClick={getApod} className='apod-button'> 
          <GiAstronautHelmet className='astronaut-icon'/> 
          Get The APOD!
        </button>
        {render}
      </div>

      {/* APOD container */}
      <div className=''>
        {apodIsShown === true && <Apod apod={apodUrl} title={title} description={desc}/>}
      </div>
    </div>
  );
}

export default App;
