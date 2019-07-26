//Icons display utility
import WeatherIcon from '../utils/WeatherIcon';

export default function WeatherHero(props){

  const {
    date,
    currently,
    timezone
  } = props;

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

  const heroLocation = timezone.substr(timezone.indexOf('/')+1).replace('_', ' ');
  const heroTemperature = Math.round(currently.temperature);

  return (
    <div className='col-12'>
      <div className='card hero'>
        <div className='container-left'>
          <h1 className='location'>{heroLocation}</h1>
          <p className='date'>{weekName[date.getDay()]}, &nbsp;{date.getUTCDate()} {monthName[date.getUTCMonth()]}</p>
        </div>
        <div className='container-right'>
          <WeatherIcon icon={currently.icon} class='weather-icon'/>
          <p className='temperature'><b>{heroTemperature}<sup className='temperature-format'>°</sup></b></p>

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