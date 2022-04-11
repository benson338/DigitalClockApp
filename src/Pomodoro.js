import React, { useContext, useEffect } from 'react';
import { IoIosSettings } from 'react-icons/io';
import { HiClock } from 'react-icons/hi';
import './styles/Pomodoro.css';
import CountdownAnimation from './components/CountdownAnimation';
import { SettingContext } from './context/SettingContext';
import Settings from './components/Settings';
import Button from './components/Button';
import { Link } from 'react-router-dom';

const Pomodoro = () => {
  const {
    pomodoro,
    executing,
    startAnimate,
    updateExecute,
    startTimer,
    pauseTimer,
    children,
    settingsCallback,
    setCurrentTimer,
  } = useContext(SettingContext);

  useEffect(() => {
    updateExecute(executing);
    return () => {
      settingsCallback();
    };
  }, [executing, settingsCallback, startAnimate, updateExecute]);

  return (
    <div className="Pomodoro">
      <h1 className="title">Pomodoro</h1>

      <Link
        className="clockLink"
        to="/"
        onClick={() => {
          pauseTimer();
          settingsCallback();
        }}
      >
        <HiClock className="clockIcon" />
      </Link>

      {pomodoro !== 0 ? (
        <div className="pomodoroContainer">
          <div className="radioButtons">
            <Button
              title="Work"
              activeClass={
                executing.active === 'work'
                  ? 'radio-btn active-btn'
                  : 'radio-btn'
              }
              callBack={() => setCurrentTimer('work')}
              disabled={
                executing.active === 'break' && startAnimate ? true : undefined
              }
            />
            <Button
              title="Break"
              activeClass={
                executing.active === 'break'
                  ? 'radio-btn active-btn'
                  : 'radio-btn'
              }
              callBack={() => setCurrentTimer('break')}
              disabled={
                executing.active === 'work' && startAnimate ? true : undefined
              }
            />
          </div>
          <div className="timerContainer">
            <CountdownAnimation
              key={pomodoro}
              timer={pomodoro}
              animate={startAnimate}
              children={children}
            />
          </div>

          <div className="buttonsContainer">
            <Button
              title="Start"
              activeClass={!startAnimate ? 'btn active-btn' : 'btn'}
              callBack={startTimer}
            />
            <Button
              title="Pause"
              activeClass={startAnimate ? 'btn active-btn' : 'btn'}
              callBack={pauseTimer}
            />
            <Button
              title={<IoIosSettings className="settingsIcon" fontSize="3rem" />}
              activeClass="settingsBtn"
              callBack={settingsCallback}
              onClick={pauseTimer}
            />
          </div>
        </div>
      ) : (
        <Settings />
      )}
    </div>
  );
};

export default Pomodoro;
