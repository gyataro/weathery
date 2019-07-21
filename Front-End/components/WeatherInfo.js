//Icons module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Weather icons
import { 
  faInfoCircle,
  faTemperatureHigh,
  faTint,
  faEye,
  faPaperPlane,
  faTachometerAlt,
  faChartArea
} from '@fortawesome/free-solid-svg-icons';

export default function WeatherInfo(){
  const weather_summary = 'Clear | No precipitation throughout the week, with high temperatures rising to 71°F next Saturday.';
  const weather_apparentTemperature = '36 C';
  const weather_humidity = '60 %';
  const weather_pressure = '1.2 atm';
  const weather_dewPoint = '36 C';
  const weather_windSpeed = '3.2 km/h';
  const weather_visibility = '1.2 km';

  return(
    <div className='col-7'>
      <div className='card info'>
        <h3><FontAwesomeIcon className='' icon={faInfoCircle} /> &nbsp;Weather Info</h3>
        <p className='summary'>{weather_summary}</p>
        <div className="flex-container">
          <div className='flex-item'>
            <p className='title'><FontAwesomeIcon className='' icon={faTemperatureHigh} /> &nbsp;Feels-like</p>
            <p className='desc'>{weather_apparentTemperature}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><FontAwesomeIcon className='' icon={faTint} /> &nbsp;Humidity</p>
            <p className='desc'>{weather_humidity}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><FontAwesomeIcon className='' icon={faTachometerAlt} /> &nbsp;Pressure</p>
            <p className='desc'>{weather_pressure}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><FontAwesomeIcon className='' icon={faChartArea} /> &nbsp;Dew Point</p>
            <p className='desc'>{weather_dewPoint}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><FontAwesomeIcon className='' icon={faPaperPlane} /> &nbsp;Wind Speed</p>
            <p className='desc'>{weather_windSpeed}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><FontAwesomeIcon className='' icon={faEye} /> &nbsp;Visibility</p>
            <p className='desc'>{weather_visibility}</p>
          </div>
        </div>
      </div>
    </div>
  )
}