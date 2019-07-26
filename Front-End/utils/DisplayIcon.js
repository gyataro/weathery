// For application icons

//Icons module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
    //Default
    faQuestionCircle,

    //Info panel
    faInfoCircle,
    faTemperatureHigh,
    faTint,
    faEye,
    faPaperPlane,
    faTachometerAlt,
    faChartArea,

    //Weekly panel
    faCalendarWeek,
    faSun,
    faMoon,

    //Error icon
    faExclamationTriangle
  } from '@fortawesome/free-solid-svg-icons';

  export default function WeatherIcon(props){

    const displayIcons = {
        //Weekly icon
        'sunrise': faSun,
        'sunset': faMoon,
        'weekly': faCalendarWeek,

        //Error icon
        'error': faExclamationTriangle,

        //Info icon
        'info': faInfoCircle,
        'feelsLike': faTemperatureHigh,
        'humidity': faTint,
        'visibility': faEye,
        'windSpeed': faPaperPlane,
        'pressure': faTachometerAlt,
        'dewPoint': faChartArea
    };
    
    return(
        (!displayIcons.hasOwnProperty(props.icon))? (
            <FontAwesomeIcon icon={faQuestionCircle} className={props.class || ''}/>
        ) : (
            <FontAwesomeIcon icon={displayIcons[props.icon]} className={props.class || ''}/>
        )
    );
};