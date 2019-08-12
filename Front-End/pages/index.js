import React, { Component } from "react";
import axios from 'axios';

import Layout from '../components/Layout.js';
import WeatherHero from '../components/weather/WeatherHero.js';
import DashboardLeft from '../components/DashboardLeft';
import DashboardRight from '../components/DashboardRight.js';
import WeatherSearch from '../components/weather/WeatherSearch.js';

//CSS file
import "../styles/main.scss";

//Icon display utility
import '../utils/DisplayIcon';

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      //Application state
      loading: true,
      error: false,

      //Weather data state
      currentDate: new Date(),
      currentLat: 51.5074,
      currentLong: 0.1278,
      weatherSummary: '',
      weatherCurrently: '',
      weatherWeekly: '',
      weatherSunrise: '',
      weatherSunset: '',
      weatherUV: -1,
      weatherTimezone: '',
      searchData: {},

      //User settings state
      isPersistent: false,
      isMetric: true,
      isLanguage: 'en',
      isDark: false,
      showInfo: true,
      showSunTime: true,
      showWeekly: true,
      showGraph: false,
      showUV: false,
      showLife: false
    };
  }

  getWeather = (lat, long) => {
    let isMetricUnits = (localStorage.getItem('isMetric') === 'true')? 'si' : 'us';
    let weatherUrl = ''.concat('https://api-weathery.herokuapp.com/weather?lat=', lat, '&long=', long, '&units=', isMetricUnits);
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
          weatherUV: res.data.weatherData.currently.uvIndex,
          weatherTimezone: (!this.state.searchData.hasOwnProperty('hit'))? (
            res.data.weatherData.timezone
          ) : (
            (this.state.searchData.hit.locale_names[0])? this.state.searchData.hit.locale_names[0] : res.data.weatherData.timezone
          )
        })
      }
    })
  }

  searchCallback = (searchReturnData) => {
    this.setState({
      loading: true,
      searchData: searchReturnData
    });
    console.log('index.js received data', searchReturnData);
    this.getWeather(searchReturnData.latlng.lat, searchReturnData.latlng.lng)
    this.setState({
      currentLat: searchReturnData.latlng.lat,
      currentLong: searchReturnData.latlng.lng
    });
  }

  componentDidMount() {
    const settingsArray = [
      'isPersistent', 
      'isMetric', 
      'isLanguage',
      'isDark',
      'showInfo',
      'showSunTime',
      'showWeekly',
      'showGraph',
      'showUV',
      'showLife'
    ];
    
    for(let i = 0; i < settingsArray.length; i++){
      let tempSetting = localStorage.getItem(settingsArray[i]);
      if(tempSetting){
        this.setState({ 
          [settingsArray[i]]: (settingsArray[i] === 'isLanguage')? tempSetting : (tempSetting === 'true')
        });
      } else {
          localStorage.setItem(settingsArray[i], this.state[settingsArray[i]]);
      }
    }

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
      
      this.getWeather(this.state.currentLat, this.state.currentLong);
    });
  }

  render() {
    if (typeof window !== 'undefined') {
      if(localStorage.getItem('isDark') === 'true'){
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }

    const {
      loading,
      error,
      currentDate,
      weatherSummary,
      weatherSunrise,
      weatherSunset,
      weatherCurrently,
      weatherWeekly,
      weatherTimezone,
      weatherUV
    } = this.state;

    return (loading) ? (
      <Layout>
        <div className='container'>
          <WeatherSearch 
            searchCallback={this.searchCallback}
          />
          <div className='loader'></div>
        </div>
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
          <WeatherSearch 
            searchCallback={this.searchCallback}
          />
          
          <WeatherHero 
            date={currentDate} 
            currently={weatherCurrently}
            timezone={weatherTimezone}
          />

          <DashboardLeft
            currently={weatherCurrently}
            summary={weatherSummary}
          />

          <DashboardRight
            date={currentDate}
            sunrise={weatherSunrise}
            sunset={weatherSunset}
            weekly={weatherWeekly} 
            uv={weatherUV}
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