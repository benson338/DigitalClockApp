import { useState } from 'react';
import './App.css';
import { GiTomato } from 'react-icons/gi';
import { HiClock } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import Greeting from './components/Greeting';
import TimeContianer from './components/TimeContianer';

function App() {
  const [date] = useState(new Date());
  console.log(date);

  function getGreeting(date) {
    const hours = date.getHours();

    if (hours >= 5 && hours < 12) {
      return 'Good Morning';
    } else if (hours >= 12 && hours < 17) {
      return 'Good Afternoon';
    } else if (hours >= 17 && hours < 24) {
      return 'Good Evening';
    } else if (hours < 5) {
      return 'Conquer The Night';
    }
  }

  return (
    <div className="App">
      <div className="showcase">
        {/* <h1 className="greeting">Time Is NOW</h1> */}
        <Greeting getGreeting={getGreeting} date={date} />
        {/* <div className="time-container">{date.toLocaleTimeString()}</div> */}
        <TimeContianer />
        <div className="date-container">
          {date.toLocaleDateString('en-Us', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
      </div>

      <div className="iconsContainer">
        <NavLink to="/">
          <HiClock fontSize="5rem" />
        </NavLink>
        <NavLink to="/pomodoro">
          <GiTomato fontSize="4.72rem" />
        </NavLink>
      </div>
    </div>
  );
}

export default App;
