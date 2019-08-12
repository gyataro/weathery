import Icon from '../../utils/DisplayIcon';

//Date name utility
import * as WeatherDate from '../../utils/WeatherDate';

export default function WeatherSun(props){

	const {
		sunrise,
		sunset
	} = props;

	const showSunTime = (localStorage.getItem('showSunTime') === 'true')? 'show': 'hidden';
	const infoSunrise = WeatherDate.getLocalTime(new Date(sunrise));
	const infoSunset = WeatherDate.getLocalTime(new Date(sunset));
	
  return(
		<div className='card sun' id={showSunTime}>
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
  )
}