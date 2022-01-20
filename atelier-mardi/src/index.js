import React from 'react';
import ReactDOM  from 'react-dom';
import './style.css';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MainContent from './components/MainContent';
  
  const page = (
    <div>
      <MyHeader />
      <MainContent />
      <MyFooter />
    </div>
  );

ReactDOM.render(page, document.getElementById('root'));

