import WeatherInfo from '../components/weather/WeatherInfo.js';
import WeatherLife from '../components/weather/WeatherLife.js';

const DashboardLeft = (props) => {
    const {
        currently,
        summary
    } = props;
    
    return(
        <div className='col-7'>
            <WeatherInfo 
                currently={currently}
                summary={summary}
            />

            <div className='spacing' />

            <WeatherLife
                currently={currently}
            />
        </div>
    )
}

export default DashboardLeft;