import React, { Component } from 'react'
import Routes from './routes/routes.js'
import './css/index.css'

class Chat extends Component {
  render() {
    return (
      <div id="chat">
        <div id='header'>Header</div>
        <div className='content'>
          <div>Left Side Menu</div>
          <Routes />
          <div>Right side menu</div>
        </div>
      </div>
    );
  }
}

export default Chat;
