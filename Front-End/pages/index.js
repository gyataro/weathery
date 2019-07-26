import React from 'react';
import axios from 'axios';

import Layout from '../components/Layout.js';
import WeatherHero from '../components/WeatherHero.js';
import WeatherInfo from '../components/WeatherInfo.js';
import WeatherWeekly from '../components/WeatherWeekly.js';

//CSS file
import "../styles/main.scss";

//Icon display utility
import '../utils/DisplayIcon';

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: false,
      currentDate: new Date(),
      currentLat: 51.5074,
      currentLong: 0.1278,
      weatherSummary: '',
      weatherCurrently: '',
      weatherWeekly: '',
      weatherSunrise: '',
      weatherSunset: '',
      weatherTimezone: ''
    };
  }

  componentDidMount() {

    var geoDataPromise = new Promise(function(resolve, reject) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          resolve({lat: position.coords.latitude, long: position.coords.longitude})
        }); 
      }
    });

    geoDataPromise.then((pos) => {
      this.setState({
        currentLat: pos.lat.toFixed(4),
        currentLong: pos.long.toFixed(4)
      });
        
        let weatherUrl = ''.concat('https://api-weathery.herokuapp.com/weather?lat=', this.state.currentLat, '&long=', this.state.currentLong);
        axios({
          method: 'get',
          url: weatherUrl,
          responseType: 'json',
          data: {}
        })
        .then(res => {
          if(res.data.error){
            this.setState({
              loading: false,
              error: true
            })
          } else {
            this.setState({
              loading: false,
              weatherSummary: ''.concat(res.data.weatherData.currently.summary, ' | ', res.data.weatherData.daily.summary),
              weatherSunrise: res.data.weatherData.daily.data[1].sunriseTime*1000,
              weatherSunset: res.data.weatherData.daily.data[1].sunsetTime*1000,
              weatherCurrently: res.data.weatherData.currently,
              weatherWeekly: res.data.weatherData.daily.data,
              weatherTimezone: res.data.weatherData.timezone
            })
          }
        })
    });

  }

  render() {
    const {
      loading,
      error,
      currentDate,
      weatherSummary,
      weatherSunrise,
      weatherSunset,
      weatherCurrently,
      weatherWeekly,
      weatherTimezone
    } = this.state;

    return (loading) ? (
      <Layout>
        <div className='loader'></div>
      </Layout>
    ) : (error) ? (
      <Layout>
        <div className='error'>
          <Icon class='' icon='error' />
          <p>An error has occured, please try again</p>
        </div>
      </Layout>
    ) : (
      <Layout>
        <div className='container'>
          <WeatherHero 
            date={currentDate} 
            currently={weatherCurrently}
            timezone={weatherTimezone}
          />
          
          <WeatherInfo 
            currently={weatherCurrently}
            summary={weatherSummary}
          />

          <WeatherWeekly
            date={currentDate}
            sunrise={weatherSunrise}
            sunset={weatherSunset}
            weekly={weatherWeekly} 
          />
          
          <div className='col-12'>
            <div className='card'>
            </div>
          </div>
        </div>
      </Layout>
    );
  };
}


export default Dashboard;