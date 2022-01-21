import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting';
import './index.css';




ReactDOM.render(
  <Greeting isLoggedIn={true} />,
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);


