//Icon display utility
import Icon from '../utils/DisplayIcon';

export default function WeatherInfo(props){

  const {
    currently,
    summary
  } = props;
  
  const infoSummary = summary;
  const infoApparentTemperature = currently.apparentTemperature + ' °C';
  const infoHumidity = (currently.humidity*100).toFixed() + ' %';
  const infoPressure = (currently.pressure/1013.25).toFixed(2) + ' atm';
  const infoDewPoint = currently.dewPoint + ' °C';
  const infoWindSpeed = currently.windSpeed + ' m/s';
  const infoVisibility = currently.visibility + ' km';

  return(
    <div className='col-7'>
      <div className='card info'>
        <h3><Icon className='' icon='info' /> &nbsp;Weather Info</h3>
        <p className='summary'>{infoSummary}</p>
        <div className="flex-container">
          <div className='flex-item'>
            <p className='title'><Icon class='' icon='feelsLike' /> &nbsp;Feels-like</p>
            <p className='desc'>{infoApparentTemperature}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><Icon className='' icon='humidity' /> &nbsp;Humidity</p>
            <p className='desc'>{infoHumidity}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><Icon class='' icon='pressure' /> &nbsp;Pressure</p>
            <p className='desc'>{infoPressure}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><Icon class='' icon='dewPoint' /> &nbsp;Dew Point</p>
            <p className='desc'>{infoDewPoint}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><Icon class='' icon='windSpeed' /> &nbsp;Wind Speed</p>
            <p className='desc'>{infoWindSpeed}</p>
          </div>
          <div className='flex-item'>
            <p className='title'><Icon class='' icon='visibility' /> &nbsp;Visibility</p>
            <p className='desc'>{infoVisibility}</p>
          </div>
        </div>
      </div>
    </div>
  )
}