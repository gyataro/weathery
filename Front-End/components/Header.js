import Link from 'next/link';
import Icon from '../utils/DisplayIcon';

export default function Header() {
  return (
    <div className='navbar'>
      <ul>
        <li>    
          <Link href="/">
            <a>Weathery</a>
          </Link>
        </li>

        <li className='settings'>
          <Link href="/settings">
            <a><Icon class='' icon='settings' />&nbsp;&nbsp;Settings</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
