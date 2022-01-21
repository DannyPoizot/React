import React from 'react';
import ReactDOM from 'react-dom';
import LoginControl from './components/LoginControl';
import Mailbox from './components/Mailbox';
import './index.css';



const messages = ["React", "Re: React", "Re:Re React"]
ReactDOM.render(
  <>
   <LoginControl />
   <Mailbox unreadMessages={messages} />
  </>,
  document.getElementById('root')
);


