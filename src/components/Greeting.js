import React from 'react';

const Greeting = ({ date, getGreeting }) => {
  return <h1 className="greeting">{getGreeting(date)}</h1>;
};

export default Greeting;
