export default function WeatherHero(props){
  const currentDate = new Date();
  const monthName = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'Auguest',
    'September',
    'October',
    'November',
    'December'
  ];

  const weekName = [
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sunday'
  ];

  return (
    <div className='col-12'>
      <div className='card hero'>
				<h1 className='location'>Kuala Lumpur</h1>
				<p className='date'>{weekName[currentDate.getDay()]}, &nbsp;{currentDate.getUTCDate()} {monthName[currentDate.getUTCMonth()]}</p>
      </div>
    </div>
  )
}