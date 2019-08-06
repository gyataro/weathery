//Icons display utility
import WeatherIcon from '../utils/WeatherIcon';

//Date name utility
import * as WeatherDate from '../utils/WeatherDate';

export default function WeatherHero(props){

  const {
    date,
    currently,
    timezone
  } = props;

  //User Settings
  const isMetricTemp = (localStorage.getItem('isMetric') === 'true')? '°C' : '°F';

  const heroLocation = timezone.substr(timezone.indexOf('/')+1).replace('_', ' ');
  const heroTemperature = Math.round(currently.temperature);

  const heroStyling = [];
  if(localStorage.getItem('isDark') === 'true'){
    heroStyling.push(
      <div key={'theme-dark'}>
        <style jsx global>{`
        .hero {
          background: #424242;
        }
        `}</style>
      </div>
    )
  } else {
    heroStyling.push(
      <div key={'theme-1'}>
        <style jsx global>{`
        .hero {
          background: #4a8fe7;
          background-image: linear-gradient(to right bottom, #4a8fe7, #00a8f3, #00bef5, #00d3f0, #44e5e7);
        }
        `}</style>
      </div>
    )
  }

  return (
    <div className='col-12'>
      <div className='card hero'>
        <div className='container-left'>
          <h1 className='location'>{heroLocation}</h1>
          <p className='date'>{WeatherDate.getWeekName(date)}, &nbsp;{WeatherDate.getUTCDate(date)} {WeatherDate.getMonthName(date)}</p>
        </div>
        <div className='container-right'>
          <WeatherIcon icon={currently.icon} class='weather-icon'/>
          <p className='temperature'><b>{heroTemperature}<sup className='temperature-format'>{isMetricTemp}</sup></b></p>

        </div>
      </div>

      {heroStyling}

    </div>
  )
}