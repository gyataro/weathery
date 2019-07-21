//Icons module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Weather icons
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

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
    'Sunday',
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday',
    'Saturday'
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
          <FontAwesomeIcon alt='icon' className='weather-icon' icon={faCloudSun} />
          <p className='temperature'><b>23<sup className='temperature-format'>°</sup></b></p>

        </div>
      </div>

      <style jsx global>{`
      .hero {
        background: #4a8fe7;
        background-image: linear-gradient(to right bottom, #4a8fe7, #00a8f3, #00bef5, #00d3f0, #44e5e7);
      }
      `}</style>
    </div>
  )
}