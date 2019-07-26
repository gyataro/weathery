//Icons module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Weather icons
import { 
  faCalendarWeek,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faSun,
  faMoon,
  faSnowflake,
  faSmog,
  faCloudShowersHeavy,
  faWind
} from '@fortawesome/free-solid-svg-icons';

export default function WeatherWeekly(props){
  const {
    date,
    sunrise,
    sunset,
    weekly
  } = props;

  const infoSunrise = new Date(sunrise).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
  const infoSunset = new Date(sunset).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
  const infoWeeklyTemp = [];

  //In the array, values for index 0, 1 are yesterday and today's weather, which isn't needed
  //Hence, i starts with 2
  for(var i=2; i < weekly.length; i++){
    infoWeeklyTemp.push({
      'high': weekly[i].temperatureHigh.toFixed().toString() + '°',
      'low': weekly[i].temperatureLow.toFixed().toString() + '°',
      'icon': weekly[i].icon
    });
  }

  console.log(infoWeeklyTemp)

  const weekName = [
    'Sun',
    'Mon', 
    'Tue', 
    'Wed', 
    'Thur', 
    'Fri',
    'Sat'
  ];

  const weatherIcons = {
    'clear-day': faSun,
    'clear-night': faMoon,
    'rain': faCloudShowersHeavy,
    'snow': faSnowflake,
    'sleet': faSnowflake,
    'wind': faWind,
    'fog': faSmog,
    'cloudy': faCloud,
    'partly-cloudy-day': faCloudSun,
    'partly-cloudy-night': faCloudMoon
  };

  return (
    <div className='col-5'>
      <div className='card sun'>
        <div className='sunrise'>
          <h3><FontAwesomeIcon className='' icon={faSun} /> &nbsp;Sunrise: 
            <span>{infoSunrise}</span>
          </h3>
        </div>

        <div className='sunset'>
          <h3><FontAwesomeIcon className='' icon={faMoon} /> &nbsp;Sunset: 
            <span>{infoSunset}</span>
          </h3>
        </div>
      </div>

      <div className='spacing'></div>

      <div className='card weekly'>
        <h3><FontAwesomeIcon className='' icon={faCalendarWeek} /> &nbsp;Weekly Forecast</h3>
        <div className="flex-container">
          <div className='flex-item'>
            <p className='date'>{weekName[(date.getDay()+1)%7]}</p>
            <FontAwesomeIcon className='weather' icon={weatherIcons[infoWeeklyTemp[0].icon]} />
            <p className='temp-high'>{infoWeeklyTemp[0].high}</p>
            <p className='temp-low'>{infoWeeklyTemp[0].low}</p>
          </div>

          <div className='flex-item'>
            <p className='date'>{weekName[(date.getDay()+2)%7]}</p>
            <FontAwesomeIcon className='weather' icon={weatherIcons[infoWeeklyTemp[1].icon]} />
            <p className='temp-high'>{infoWeeklyTemp[1].high}</p>
            <p className='temp-low'>{infoWeeklyTemp[1].low}</p>
          </div>

          <div className='flex-item'>
            <p className='date'>{weekName[(date.getDay()+3)%7]}</p>
            <FontAwesomeIcon className='weather' icon={weatherIcons[infoWeeklyTemp[2].icon]} />
            <p className='temp-high'>{infoWeeklyTemp[2].high}</p>
            <p className='temp-low'>{infoWeeklyTemp[2].low}</p>
          </div>

          <div className='flex-item'>
            <p className='date'>{weekName[(date.getDay()+4)%7]}</p>
            <FontAwesomeIcon className='weather' icon={weatherIcons[infoWeeklyTemp[3].icon]} />
            <p className='temp-high'>{infoWeeklyTemp[3].high}</p>
            <p className='temp-low'>{infoWeeklyTemp[3].low}</p>
          </div>

          <div className='flex-item'>
            <p className='date'>{weekName[(date.getDay()+5)%7]}</p>
            <FontAwesomeIcon className='weather' icon={weatherIcons[infoWeeklyTemp[4].icon]} />
            <p className='temp-high'>{infoWeeklyTemp[4].high}</p>
            <p className='temp-low'>{infoWeeklyTemp[4].low}</p>
          </div>

          <div className='flex-item'>
            <p className='date'>{weekName[(date.getDay()+6)%7]}</p>
            <FontAwesomeIcon className='weather' icon={weatherIcons[infoWeeklyTemp[5].icon]} />
            <p className='temp-high'>{infoWeeklyTemp[5].high}</p>
            <p className='temp-low'>{infoWeeklyTemp[5].low}</p>
          </div>
        </div>  
      </div>
    </div>
  )
}