//Icons module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Weather icons
import { 
  faCalendarWeek,
  faCloudSun,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons';

export default function WeatherWeekly(props){
  const {date} = props;
  const sunrise = '7:21 am';
  const sunset = '6:35 pm';
  const weekName = [
    'Sun',
    'Mon', 
    'Tue', 
    'Wed', 
    'Thur', 
    'Fri',
    'Sat'
  ];

  return (
    <div className='col-5'>
      <div className='card sun'>
        <div className='sunrise'>
          <h3><FontAwesomeIcon className='' icon={faSun} /> &nbsp;Sunrise: 
            <span>{sunrise}</span>
          </h3>
        </div>

        <div className='sunset'>
          <h3><FontAwesomeIcon className='' icon={faMoon} /> &nbsp;Sunset: 
            <span>{sunset}</span>
          </h3>
        </div>
      </div>

      <div className='spacing'></div>

      <div className='card weekly'>
        <h3><FontAwesomeIcon className='' icon={faCalendarWeek} /> &nbsp;Weekly Forecast</h3>
        <div className="flex-container">
          <div className='flex-item'>
            <p className='date'>{weekName[(date.getDay()+1)%7]}</p>
            <FontAwesomeIcon className='weather' icon={faCloudSun} />
            <p className='temp-high'>30°</p>
            <p className='temp-low'>21°</p>
          </div>

          <div className='flex-item'>
            <p className='date'>{weekName[(date.getDay()+2)%7]}</p>
            <FontAwesomeIcon className='weather' icon={faCloudSun} />
            <p className='temp-high'>30°</p>
            <p className='temp-low'>21°</p>
          </div>

          <div className='flex-item'>
            <p className='date'>{weekName[(date.getDay()+3)%7]}</p>
            <FontAwesomeIcon className='weather' icon={faCloudSun} />
            <p className='temp-high'>30°</p>
            <p className='temp-low'>21°</p>
          </div>

          <div className='flex-item'>
            <p className='date'>{weekName[(date.getDay()+4)%7]}</p>
            <FontAwesomeIcon className='weather' icon={faCloudSun} />
            <p className='temp-high'>30°</p>
            <p className='temp-low'>21°</p>
          </div>

          <div className='flex-item'>
            <p className='date'>{weekName[(date.getDay()+5)%7]}</p>
            <FontAwesomeIcon className='weather' icon={faCloudSun} />
            <p className='temp-high'>30°</p>
            <p className='temp-low'>21°</p>
          </div>

          <div className='flex-item'>
            <p className='date'>{weekName[(date.getDay()+6)%7]}</p>
            <FontAwesomeIcon className='weather' icon={faCloudSun} />
            <p className='temp-high'>30°</p>
            <p className='temp-low'>21°</p>
          </div>
        </div>  
      </div>
    </div>
  )
}