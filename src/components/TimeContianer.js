import { useState, useEffect } from 'react';

const TimeContianer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="time-container">{time}</div>;
};

export default TimeContianer;
