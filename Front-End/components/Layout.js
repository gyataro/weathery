import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div className='app'>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
