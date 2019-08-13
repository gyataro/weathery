import Icon from '../../utils/DisplayIcon';

import Translate from '../../utils/Translate';

function WeatherLife(props){
	console.log(props);
	const {
		currently
	} = props;

	const isMetric = (localStorage.getItem('isMetric') === 'true')? 'metric' : 'imperial';
	const conditionMap = {
		metric: {
			driving: 1,
			running: 30,
			biking: 30,
			swimming: 30,
			fishing: 10,
			hiking: 0.5
		},
		imperial: {
			driving: 0.6,
			running: 86,
			biking: 86,
			swimming: 86,
			fishing: 24,
			hiking: 0.5
		}
	} 

	const showLife = (localStorage.getItem('showLife') === 'true')? 'show': 'hidden';
	const drivingIndex = (currently.visibility >= conditionMap[isMetric].driving)? props.strings.good : props.strings.poor;
	const runningIndex = (currently.temperature < conditionMap[isMetric].running)? props.strings.good : props.strings.poor;
	const bikingIndex = (currently.temperature < conditionMap[isMetric].biking)? props.strings.good : props.strings.poor;
	const swimmingIndex = (currently.temperature < conditionMap[isMetric].swimming)? props.strings.good : props.strings.poor;
	const fishingIndex = (currently.windSpeed < conditionMap[isMetric].fishing)? props.strings.good : props.strings.poor;
	const hikingIndex = (currently.precipProbability < conditionMap[isMetric].hiking)? props.strings.good : props.strings.poor;

	return(
		<div className='card info' id={showLife}>
			<h3><Icon className='' icon='life' /> &nbsp;{props.strings.title}</h3>
			<p className='summary'></p>
			<div className="flex-container">
				<div className='flex-item'>
					<p className='title'><Icon class='' icon='driving' /> &nbsp;{props.strings.driving}</p>
					<p className='desc'>{drivingIndex}</p>
				</div>
				<div className='flex-item'>
					<p className='title'><Icon className='' icon='running' /> &nbsp;{props.strings.running}</p>
					<p className='desc'>{runningIndex}</p>
				</div>
				<div className='flex-item'>
					<p className='title'><Icon class='' icon='biking' /> &nbsp;{props.strings.biking}</p>
					<p className='desc'>{bikingIndex}</p>
				</div>
				<div className='flex-item'>
					<p className='title'><Icon class='' icon='swimming' /> &nbsp;{props.strings.swimming}</p>
					<p className='desc'>{swimmingIndex}</p>
				</div>
				<div className='flex-item'>
					<p className='title'><Icon class='' icon='fishing' /> &nbsp;{props.strings.fishing}</p>
					<p className='desc'>{fishingIndex}</p>
				</div>
				<div className='flex-item'>
					<p className='title'><Icon class='' icon='hiking' /> &nbsp;{props.strings.hiking}</p>
					<p className='desc'>{hikingIndex}</p>
				</div>
			</div>
		</div>
	)
}

WeatherLife.defaultProps = {
	strings: {
		title: 'Life Index',
		poor: 'Poor',
		good: 'Good',
        driving: 'Driving',
        running: 'Running',
        biking: 'Biking',
        swimming: 'Swimming',
        fishing: 'Fishing',
        hiking: 'Hiking'
	}
}

export default Translate('WeatherLife')(WeatherLife)