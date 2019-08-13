import Icon from '../../utils/DisplayIcon';

import Translate from '../../utils/Translate';

function WeatherUV(props){

	const {
        uv
	} = props;

    const showUV = (localStorage.getItem('showUV') === 'true')? 'show': 'hidden';
    const uvIndex = (uv > 0)? uv : '0';

    let indicatorValue = 'i0';
    let uvTitle = props.strings.default.title;
    let uvSummary = '';

    switch(true){
        case (uv < 3):
            indicatorValue = 'i0';
            uvTitle = props.strings.low.title;
            uvSummary = props.strings.low.summary;
            break;
        case (uv < 6):
            indicatorValue = 'i1';
            uvTitle = props.strings.moderate.title;
            uvSummary =  props.strings.moderate.summary;
            break;
        case (uv < 8):
            indicatorValue = 'i2';
            uvTitle = props.strings.high.title;
            uvSummary = props.strings.high.summary;
            break;
        case (uv < 11):
            indicatorValue = 'i3';
            uvTitle = props.strings.vhigh.title;
            uvSummary = props.strings.vhigh.summary;
            break;
        case (uv >= 11):
            indicatorValue = 'i4';
            uvTitle = props.strings.extreme.title;
            uvSummary = props.strings.extreme.summary;
            break;
        default:
            break;
    }
	
    return(
		<div className='card uv' id={showUV}>
			<h3><Icon className='' icon='uv' /> &nbsp;{props.strings.title}</h3>
            <div className="uv-scale">
                <div className='indicator' id={indicatorValue}>
                    <p>{uvIndex}</p>
                </div>
                <div className='low'></div>
                <div className='moderate'></div>
                <div className='high'></div>
                <div className='vhigh'></div>
                <div className='extreme'></div>
            </div>
            <p className='summary-title'>{uvTitle}</p>
            <p className='summary'>{uvSummary}</p>
		</div>
    )
}

WeatherUV.defaultProps = {
    strings: {
        title: 'UV Index',
        default: {
            title: 'No data available, please try again later'
        },
        low: {
            title: 'Low | No protection needed',
            summary: 'You can safely stay outside using minimal sun protection.'
        },
        moderate: {
            title: 'Moderate | Protection needed',
            summary: 'Seek shade during late morning through mid-afternoon. When outside, generously apply broad-spectrum SPF-15 or higher sunscreen on exposed skin, and wear protective clothing, a wide-brimmed hat, and sunglasses.'
        },
        high: {
            title: 'High | Extra protection needed',
            summary: 'Reduce time in the Sun between 10 a.m. and 4 p.m. If outdoors, seek shade and wear Sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.'
        },
        vhigh: {
            title: 'Very High | Extra protection needed',
            summary: 'Be careful outside, especially during late morning through mid-afternoon. If your shadow is shorter than you, seek shade and wear protective clothing, a wide-brimmed hat, and sunglasses, and generously apply a minimum of  SPF-15, broad-spectrum sunscreen on exposed skin.'
        },
        extreme: {
            title: 'Extreme | Extra protection needed',
            summary: 'Be careful outside, especially during late morning through mid-afternoon. If your shadow is shorter than you, seek shade and wear protective clothing, a wide-brimmed hat, and sunglasses, and generously apply a minimum of  SPF-15, broad-spectrum sunscreen on exposed skin.'
        }
    }
}

export default Translate('WeatherUV')(WeatherUV)