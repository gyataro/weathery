import WeatherInfo from '../components/weather/WeatherInfo.js';

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
        </div>
    )
}

export default DashboardLeft;