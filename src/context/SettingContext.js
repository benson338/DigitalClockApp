import React, { createContext, useState } from 'react';

export const SettingContext = createContext();

const SettingContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0.2);
  const [executing, setExecuting] = useState({
    work: 0.2,
    break: 0.1,
    active: 'work',
  });
  const [startAnimate, setStartAnimate] = useState(false);

  // start animation fn
  function startTimer() {
    setStartAnimate(true);
  }

  // pause animation fn
  function pauseTimer() {
    setStartAnimate(false);
  }

  // stop animation fn
  function stopAnimate() {
    setStartAnimate(false);
  }

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    const formatSecs = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes} : ${formatSecs}`;
  };

  function updateExecute(updatedSettings) {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  }

  // clear session storage
  // should be called on settings btn
  function settingsCallback() {
    setExecuting({});
    setPomodoro(0);
  }

  function setTimerTime(evaluate) {
    switch (evaluate.active) {
      case 'work':
        setPomodoro(evaluate.work);
        break;
      case 'break':
        setPomodoro(evaluate.break);
        break;
      default:
        setPomodoro(0);
        break;
    }
  }

  function setCurrentTimer(activeState) {
    updateExecute({
      ...executing,
      active: activeState,
    });
    setTimerTime(executing);
  }

  return (
    <SettingContext.Provider
      value={{
        pomodoro,
        executing,
        startAnimate,
        updateExecute,
        startTimer,
        pauseTimer,
        stopAnimate,
        children,
        settingsCallback,
        setCurrentTimer,
      }}
    >
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingContextProvider;
