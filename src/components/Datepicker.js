import React, { useState } from 'react';

const useDatePicker = () => {

  // Get today's date in local time
  const today = new Date().toLocaleString().split(',')[0];

  // Format the local date
  let splitDate = today.split('/');

  let m = splitDate[0]
    if(m < 10) m = `0${m}`;

  let d = splitDate[1]
    if(d < 10) d = `0${d}`;

  let y = splitDate[2]

  let formattedDate = `${y}-${m}-${d}`;
  
  let [ selectedDate, setDate ] = useState(formattedDate);

  return {
    selectedDate,
    render:(
    <div className='date-wrapper'>
        <label className='apod-date-label' htmlFor="apodDate">APOD From:</label>
        <input className='apod-date-picker' type="date" min='1995-06-16' max={formattedDate} id="apodDate" name="apodDate" value={selectedDate} onChange={e => setDate(e.target.value)}/>
    </div>
  )}
}

export {useDatePicker}