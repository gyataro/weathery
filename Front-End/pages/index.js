import Layout from '../components/MyLayout.js';
import Link from 'next/link';

//CSS file
import "../styles/styles.css"

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
        <div className='col-12'>
          <div className='card hero'>
          </div>
        </div>
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