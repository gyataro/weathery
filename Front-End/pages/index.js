import Layout from '../components/Layout.js';
import WeatherHero from '../components/WeatherHero.js';
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
  return (
    <Layout>
      <div className='container'>
        <WeatherHero />
        <div className='col-7'>
          <div className='card weekly'>
          </div>
        </div>
        <div className='col-5'>
          <div className='card'>
          </div>
        </div>
        <div className='col-12'>
          <div className='card'>
          </div>
        </div>
      </div>
    </Layout>
  );
}