import { useState } from 'react'; 
import axios from 'axios';
import './App.css';
import { GiAstronautHelmet } from 'react-icons/gi';
import Apod from './components/Apod';

function App() {

  const [ apodUrl, setApodUrl ] = useState('')
  const [ title, setTitle ] = useState('Apod Title');
  const [ desc, setDesc ] = useState('Apod Description');
  const [ apodIsShown, showApod ] = useState(false);

  let API_KEY = 'bdEGU1QkUUkeD4ghVmYsgojABstcMOQ7GhsT7OCQ';
  let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  const getApod = () => {
    
    axios.get(url).then(res => {
      setApodUrl(res.data.url)
      setTitle(res.data.title)
      setDesc(res.data.explanation)
      console.log(res)
    })
    showApod(true);
  }

  return (
    <div className="App">
      <h1>NASA Apod</h1>
      <p className='lead'>Explore the universe with the NASA Astronomy Picture of the Day, or APOD for short!</p>
      <p className='lead'>If you would like to get today's APOD, click the button below! If you want to get the APOD for a specific date, use the Calendar in the next section</p>
      <button onClick={getApod} className='apod-button'> 
        <GiAstronautHelmet className='astronaut-icon'/> 
        Get Today's APOD
      </button>

      {/* APOD container */}
      <div className=''>
        {apodIsShown === true && <Apod apod={apodUrl} title={title} description={desc} />}
      </div>
    </div>
  );
}

export default App;
