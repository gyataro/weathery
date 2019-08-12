import WeatherWeekly from '../components/weather/WeatherWeekly.js';
import WeatherSun from '../components/weather/WeatherSun.js';
import WeatherUV from '../components/weather/WeatherUV.js';

const DashboardRight = (props) => {
    const {
        date,
        sunrise,
        sunset,
        weekly,
        uv
    } = props;

    return(
        <div className='col-5'>
            <WeatherSun 
                sunrise={sunrise}
                sunset={sunset}
            />

            <div className='spacing' />

            <WeatherWeekly 
                date={date}
                weekly={weekly}
            />

            <div className='spacing' />

            <WeatherUV
                uv={uv}
            />
        </div>
    )
}

export default DashboardRight;