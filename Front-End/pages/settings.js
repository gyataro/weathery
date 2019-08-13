import Layout from '../components/Layout.js';
import Icon from '../utils/DisplayIcon';

import React, { Component } from "react";
import Toggle from '../utils/Toggle';

import Translate from '../utils/Translate';

//CSS file
import "../styles/main.scss";

class Settings extends Component {
  constructor() {
    super();
    this.state = { 
      //Temporary state for settings page togglers only
      isPersistent: false,
      isMetric: true,
      isLanguage: 'en',
      isDark: false,
      showInfo: true,
      showSunTime: true,
      showWeekly: true,
      showUV: false,
      showLife: false
    };
  }

  settingsChangeCallback = (checked, event, id) => {
    localStorage.setItem(id, checked);
    this.setState({ 
      [id]: checked 
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
  }

  settingsDropdownChange = (event) => {
    localStorage.setItem('isLanguage', event.target.value);
    this.setState({isLanguage: event.target.value});
  }

  render(){
    if (typeof window !== 'undefined') {
      if(localStorage.getItem('isDark') === 'true'){
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }
    const languages = ['en', 'es', 'zh', 'ja', 'id'];
    const languageFull = ['English', 'Español', '简体中文', '日本語', 'Bahasa Melayu']
    const languageSelection = [];
    for(let i = 0; i < languages.length; i++){
      languageSelection.push(
        <option key={languages[i]} value={languages[i]}>{languageFull[i]}</option>
      )
    }
    return (
      <Layout>
        <div className='settings-container'>
          <h1 id='settings-title'><Icon class='' icon='settings' />&nbsp;&nbsp;Settings</h1>
          <div className='col-12'>
            <div className='card settings'>
              <h3>{this.props.strings.general.title}</h3>
              <ul>
                <li>
                  <div className='container-70'>
                    {this.props.strings.general.metricTitle}
                  </div>
                  <div className='container-30'>
                    <Toggle id='isMetric' checked={this.state.isMetric} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
                <li>
                  <div className='container-70'>
                    {this.props.strings.general.languageTitle}
                  </div>
                  <div className='container-30'>
                    <select value={this.state.isLanguage} onChange={this.settingsDropdownChange}>
                      {languageSelection}
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-12'>
            <div className='card settings'>
              <h3>{this.props.strings.appearance.title}</h3>
              <ul>
                <li>
                  <div className='container-70'>
                    {this.props.strings.appearance.darkTitle}
                  </div>
                  <div className='container-30'>
                    <Toggle id='isDark' checked={this.state.isDark} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-12'>
            <div className='card settings'>
              <h3>{this.props.strings.panels.title}</h3>
              <ul>
                <li>
                  <div className='container-70'>
                    {this.props.strings.panels.infoTitle}
                  </div>
                  <div className='container-30'>
                    <Toggle id='showInfo' checked={this.state.showInfo} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
                <li>
                  <div className='container-70'>
                    {this.props.strings.panels.sunTitle}
                  </div>
                  <div className='container-30'>
                    <Toggle id='showSunTime' checked={this.state.showSunTime} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
                <li>
                  <div className='container-70'>
                    {this.props.strings.panels.weeklyTitle}
                  </div>
                  <div className='container-30'>
                    <Toggle id='showWeekly' checked={this.state.showWeekly} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
                <li>
                  <div className='container-70'>
                    {this.props.strings.panels.UVTitle}
                  </div>
                  <div className='container-30'>
                    <Toggle id='showUV' checked={this.state.showUV} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
                <li>
                  <div className='container-70'>
                    {this.props.strings.panels.lifeTitle}
                  </div>
                  <div className='container-30'>
                    <Toggle id='showLife' checked={this.state.showLife} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </Layout>
    );
  }
}

//Default language text
Settings.defaultProps = {
  strings: {
    general: {
      title: 'General',
      metricTitle: 'Use metric units (celsius)',
      languageTitle: 'Language'
    },

    appearance: {
      title: 'Appearance',
      darkTitle: 'Toggle dark mode'
    },

    panels: {
      title: 'Panels',
      infoTitle: 'Show more weather info',
      sunTitle: 'Show sunrise / sunset time',
      weeklyTitle: 'Show weekly info',
      UVTitle: 'Show UV warning',
      lifeTitle: 'Show life index'
    }
  }
};

export default Translate('Settings')(Settings);