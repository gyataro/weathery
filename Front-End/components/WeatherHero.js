import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WeatherHero(props){
  const currentDate = new Date();
  const monthName = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'Auguest',
    'September',
    'October',
    'November',
    'December'
  ];

  const weekName = [
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sunday'
  ];

  const weatherIcons = [
    'clear-day',
    'clear-night',
    'rain',
    'snow',
    'sleet',
    'wind',
    'fog',
    'cloudy',
    'partly-cloudy-day',
    'partly-cloudy-night'
  ]

  return (
    <div className='col-12'>
      <div className='card hero'>
        <div className='container-left'>
          <h1 className='location'>Kuala Lumpur</h1>
          <p className='date'>{weekName[currentDate.getDay()]}, &nbsp;{currentDate.getUTCDate()} {monthName[currentDate.getUTCMonth()]}</p>
        </div>
        <div className='container-right'>
          <FontAwesomeIcon className='weather-icon' icon={faCloudSun} />
          <p className='temperature'><b>23<sup className='temperature-format'>°</sup></b></p>
          
        </div>
      </div>
    </div>
  )
}