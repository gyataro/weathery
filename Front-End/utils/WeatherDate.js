export function getWeekName(date = new Date(), offset = 0){
  if(!(date instanceof Date)){
    date = new Date();
  }

  const weekName = [
    'Sunday',
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday',
    'Saturday'
  ];

  return weekName[(date.getDay() + offset)%7];
};

export function getPartialWeekName(date = new Date(), offset = 0){
  if(!(date instanceof Date)){
    date = new Date();
  }

  const weekName = [
    'Sun',
    'Mon', 
    'Tue', 
    'Wed', 
    'Thur', 
    'Fri',
    'Sat'
  ];

  return weekName[(date.getDay() + offset)%7];
};

export function getMonthName(date = new Date()){
  if(!(date instanceof Date)){
    date = new Date();
  }

  const monthName = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
  return monthName[date.getUTCMonth()];
};

export function getLocalTime(date = new Date()){
  if(!(date instanceof Date)){
    date = new Date();
  }

  return date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
}

export function getUTCDate(date = new Date()){
  if(!(date instanceof Date)){
    date = new Date();
  }

  return date.getUTCDate();
}