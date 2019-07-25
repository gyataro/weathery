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

export default function WeatherInfo(props){

  const {
    currently,
    summary
  } = props;
  
  const infoSummary = summary || 'N/A';
  const infoApparentTemperature = currently.apparentTemperature + ' °C' || 'N/A';
  const infoHumidity = (currently.humidity*100) + ' %' || 'N/A';
  const infoPressure = (currently.pressure/1013.25).toFixed(2) + ' atm' || 'N/A';
  const infoDewPoint = currently.dewPoint + ' °C' || 'N/A';
  const infoWindSpeed = currently.windSpeed + ' m/s' || 'N/A';
  const infoVisibility = currently.visibility + ' km' || 'N/A';

  return(
    <div className='col-7'>
      <div className='card info'>
        <h3><FontAwesomeIcon className='' icon={faInfoCircle} /> &nbsp;Weather Info</h3>
        <p className='summary'>{infoSummary}</p>
        <div className="flex-container">
          <div className='flex-item'>
            <p className='title'><FontAwesomeIcon className='' icon={faTemperatureHigh} /> &nbsp;Feels-like</p>
            <p className='desc'>{infoApparentTemperature}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><FontAwesomeIcon className='' icon={faTint} /> &nbsp;Humidity</p>
            <p className='desc'>{infoHumidity}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><FontAwesomeIcon className='' icon={faTachometerAlt} /> &nbsp;Pressure</p>
            <p className='desc'>{infoPressure}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><FontAwesomeIcon className='' icon={faChartArea} /> &nbsp;Dew Point</p>
            <p className='desc'>{infoDewPoint}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><FontAwesomeIcon className='' icon={faPaperPlane} /> &nbsp;Wind Speed</p>
            <p className='desc'>{infoWindSpeed}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><FontAwesomeIcon className='' icon={faEye} /> &nbsp;Visibility</p>
            <p className='desc'>{infoVisibility}</p>
          </div>
        </div>
      </div>
    </div>
  )
}