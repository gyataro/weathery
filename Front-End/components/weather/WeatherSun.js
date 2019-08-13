import Icon from '../../utils/DisplayIcon';

import Translate from '../../utils/Translate';

//Date name utility
import * as WeatherDate from '../../utils/WeatherDate';

function WeatherSun(props){

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
				<h3><Icon class='' icon='sunrise' /> &nbsp;{props.strings.sunrise}: 
					<span>{infoSunrise}</span>
				</h3>
			</div>

			<div className='sunset'>
				<h3><Icon class='' icon='sunset' /> &nbsp;{props.strings.sunset}: 
					<span>{infoSunset}</span>
				</h3>
			</div>
		</div>
  )
}

WeatherSun.defaultProps = {
	strings: {
		sunrise: 'Sunrise',
        sunset: 'Sunset'
	}
}

export default Translate('WeatherSun')(WeatherSun)