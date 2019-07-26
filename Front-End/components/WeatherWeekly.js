//Icons display utility
import WeatherIcon from '../utils/WeatherIcon';
import Icon from '../utils/DisplayIcon';

//Date name utility
import * as WeatherDate from '../utils/WeatherDate';

export default function WeatherWeekly(props){
  const {
    date,
    sunrise,
    sunset,
    weekly
  } = props;

  const infoSunrise = WeatherDate.getLocalTime(new Date(sunrise));
  const infoSunset = WeatherDate.getLocalTime(new Date(sunset));
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

  const weeklyElements = [];

  for(var j=0; j < infoWeeklyTemp.length; j++){
    weeklyElements.push(
      <div className='flex-item'>
        <p className='date'>{WeatherDate.getPartialWeekName(date, j+1)}</p>
        <WeatherIcon class='weather' icon={infoWeeklyTemp[j].icon} />
        <p className='temp-high'>{infoWeeklyTemp[j].high}</p>
        <p className='temp-low'>{infoWeeklyTemp[j].low}</p>
      </div>
    );
  }

  return (
    <div className='col-5'>

      <div className='card sun'>
        <div className='sunrise'>
          <h3><Icon class='' icon='sunrise' /> &nbsp;Sunrise: 
            <span>{infoSunrise}</span>
          </h3>
        </div>

        <div className='sunset'>
          <h3><Icon class='' icon='sunset' /> &nbsp;Sunset: 
            <span>{infoSunset}</span>
          </h3>
        </div>
      </div>

      <div className='spacing'></div>

      <div className='card weekly'>
        <h3><Icon className='' icon='weekly' /> &nbsp;Weekly Forecast</h3>
        <div className="flex-container">
          {weeklyElements}
        </div>  
      </div>

    </div>
  )
}