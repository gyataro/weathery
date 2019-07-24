import React from 'react';

import Layout from '../components/Layout.js';
import WeatherHero from '../components/WeatherHero.js';
import WeatherInfo from '../components/WeatherInfo.js';
import WeatherWeekly from '../components/WeatherWeekly.js';
import fetch from 'isomorphic-unfetch';

//CSS file
import "../styles/main.scss";

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentDate: new Date(),
      currentLat: 51.5074,
      currentLong: 0.1278,
      weatherSummary: '',
      weatherCurrently: '',
      weatherWeekly: '',
      weatherSunrise: '',
      weatherSunset: ''
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

      fetch(''.concat('https://api-weathery.herokuapp.com/weather?lat=', this.state.currentLat, '&long=', this.state.currentLong))
        .then(response => response.json())
        .then(json => {
          this.setState({
            weatherSummary: ''.concat(json.weatherData.currently.summary, ' | ', json.weatherData.daily.summary),
            weatherSunrise: json.weatherData.daily.data[1].sunriseTime,
            weatherSunset: json.weatherData.daily.data[1].sunsetTime,
            weatherCurrently: json.weatherData.currently,
            weatherWeekly: json.weatherData.daily.data
          })
          console.log(weatherSummary, weatherSunrise, weatherSunset);
        })

    });

    
    
  }

  render() {
    const currentDate = new Date();

    return (
    <Layout>
      <div className='container'>
        <WeatherHero date={this.state.currentDate}/>
        
        <WeatherInfo date={this.state.currentDate}/>

        <WeatherWeekly date={this.state.currentDate}/>
        
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