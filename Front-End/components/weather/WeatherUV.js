import Icon from '../../utils/DisplayIcon';

export default function WeatherSun(props){

	const {
        uv
	} = props;

    const showUV = (localStorage.getItem('showUV') === 'true')? 'show': 'hidden';
    const uvIndex = (uv > 0)? uv : '0';

    let indicatorValue = 'i0';
    let uvTitle = 'No data available, please try again later';
    let uvSummary = '';

    switch(true){
        case (uv < 3):
            indicatorValue = 'i0';
            uvTitle = 'Low | No protection needed'
            uvSummary = 'You can safely stay outside using minimal sun protection.'
            break;
        case (uv < 6):
            indicatorValue = 'i1';
            uvTitle = 'Moderate | Protection needed'
            uvSummary =  'Seek shade during late morning through mid-afternoon. When outside, generously apply broad-spectrum SPF-15 or higher sunscreen on exposed skin, and wear protective clothing, a wide-brimmed hat, and sunglasses.'
            break;
        case (uv < 8):
            indicatorValue = 'i2';
            uvTitle = 'High | Extra protection needed'
            uvSummary = 'Reduce time in the Sun between 10 a.m. and 4 p.m. If outdoors, seek shade and wear Sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.';
            break;
        case (uv < 11):
            indicatorValue = 'i3';
            uvTitle = 'Very High | Extra protection needed'
            uvSummary = 'Be careful outside, especially during late morning through mid-afternoon. If your shadow is shorter than you, seek shade and wear protective clothing, a wide-brimmed hat, and sunglasses, and generously apply a minimum of  SPF-15, broad-spectrum sunscreen on exposed skin.';
            break;
        case (uv >= 11):
            indicatorValue = 'i4';
            uvTitle = 'Extreme | Extra protection needed'
            uvSummary = 'Be careful outside, especially during late morning through mid-afternoon. If your shadow is shorter than you, seek shade and wear protective clothing, a wide-brimmed hat, and sunglasses, and generously apply a minimum of  SPF-15, broad-spectrum sunscreen on exposed skin.';
            break;
        default:
            break;
    }
	
    return(
		<div className='card uv' id={showUV}>
			<h3><Icon className='' icon='uv' /> &nbsp;UV Index</h3>
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