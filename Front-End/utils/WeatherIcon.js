//For weather forecast icons only

//Icons module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Weather icons
import { 
    //Default
    faQuestionCircle,

    //Weather types
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

export default function WeatherIcon(props){

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

    return(
        (!weatherIcons.hasOwnProperty(props.icon))? (
            <FontAwesomeIcon title='no data' aria-label='no data' icon={faQuestionCircle} className={props.class || ''}/>
        ) : (
            <FontAwesomeIcon title={props.icon.replace('-', ' ')} aria-label={props.icon.replace('-', ' ')} icon={weatherIcons[props.icon]} className={props.class || ''}/>
        )
    );
};
