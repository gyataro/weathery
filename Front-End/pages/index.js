import Layout from '../components/Layout.js';
import WeatherHero from '../components/WeatherHero.js';
import WeatherInfo from '../components/WeatherInfo.js';
import WeatherWeekly from '../components/WeatherWeekly.js';
import Link from 'next/link';
import Head from 'next/head';

//CSS file
import "../styles/main.scss";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  const currentDate = new Date();

  return (
    <Layout>
      <div className='container'>
        <WeatherHero date={currentDate}/>
        
        <WeatherInfo date={currentDate}/>

        <WeatherWeekly date={currentDate}/>
        
        <div className='col-12'>
          <div className='card'>
          </div>
        </div>
      </div>
    </Layout>
  );
}