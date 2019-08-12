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

    //Sunrise / sunset panel
    faSun,
    faMoon,

    //UV Index panel
    faUmbrellaBeach,

    //Error icon
    faExclamationTriangle,

    //Navbar icon
    faCog,
    faSearch
  } from '@fortawesome/free-solid-svg-icons';

  export default function WeatherIcon(props){

    const displayIcons = {
        //UV index panel
        'uv': faUmbrellaBeach,
        
        //Sunrise / sunset icon
        'sunrise': faSun,
        'sunset': faMoon,

        //Weekly icon
        'weekly': faCalendarWeek,

        //Error icon
        'error': faExclamationTriangle,

        //Navbar icon
        'settings': faCog,
        'search': faSearch,

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