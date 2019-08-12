import Icon from '../../utils/DisplayIcon';

export default function WeatherLife(props){
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
	const drivingIndex = (currently.visibility >= conditionMap[isMetric].driving)? 'Good' : 'Poor';
	const runningIndex = (currently.temperature < conditionMap[isMetric].running)? 'Good' : 'Poor';
	const bikingIndex = (currently.temperature < conditionMap[isMetric].biking)? 'Good' : 'Poor';
	const swimmingIndex = (currently.temperature < conditionMap[isMetric].swimming)? 'Good' : 'Poor';
	const fishingIndex = (currently.windSpeed < conditionMap[isMetric].fishing)? 'Good' : 'Poor';
	const hikingIndex = (currently.precipProbability < conditionMap[isMetric].hiking)? 'Good' : 'Poor';

	return(
		<div className='card info' id={showLife}>
			<h3><Icon className='' icon='life' /> &nbsp;Life Index</h3>
			<p className='summary'></p>
			<div className="flex-container">
				<div className='flex-item'>
					<p className='title'><Icon class='' icon='driving' /> &nbsp;Driving</p>
					<p className='desc'>{drivingIndex}</p>
				</div>
				<div className='flex-item'>
					<p className='title'><Icon className='' icon='running' /> &nbsp;Running</p>
					<p className='desc'>{runningIndex}</p>
				</div>
				<div className='flex-item'>
					<p className='title'><Icon class='' icon='biking' /> &nbsp;Biking</p>
					<p className='desc'>{bikingIndex}</p>
				</div>
				<div className='flex-item'>
					<p className='title'><Icon class='' icon='swimming' /> &nbsp;Swimming</p>
					<p className='desc'>{swimmingIndex}</p>
				</div>
				<div className='flex-item'>
					<p className='title'><Icon class='' icon='fishing' /> &nbsp;Fishing</p>
					<p className='desc'>{fishingIndex}</p>
				</div>
				<div className='flex-item'>
					<p className='title'><Icon class='' icon='hiking' /> &nbsp;Hiking</p>
					<p className='desc'>{hikingIndex}</p>
				</div>
			</div>
		</div>
	)
}