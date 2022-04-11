import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import Pomodoro from './Pomodoro';
import SettingContextProvider from './context/SettingContext';

ReactDOM.render(
  <SettingContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
      </Routes>
    </BrowserRouter>
  </SettingContextProvider>,
  document.getElementById('root')
);
