import Link from 'next/link'

export default function Header() {
  return (
    <div className='navbar'>
      <ul>
        <li>    
          <Link href="https://github.com/Gern-Yataro/Weathery-Weather-App">
            <a>Weathery</a>
          </Link>
        </li>
        <li>
        <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
