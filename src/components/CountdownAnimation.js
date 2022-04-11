/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingContext } from '../context/SettingContext';

const CountdownAnimation = ({ key, timer, animate, children }) => {
  const { stopAnimate, executing, setCurrentTimer } =
    useContext(SettingContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors="#ee9910"
      trailColor="rgba(255, 255, 255, 0.6)"
      strokeWidth={3}
      size={250}
      onComplete={() => {
        stopAnimate();
        if (executing.active === 'work') {
          setCurrentTimer('break');
        } else if (executing.active === 'break') {
          setCurrentTimer('work');
        }
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
