import React, { Component } from 'react'
import './css/index.css'
import './css/colorFonts.css'
import './css/media.css'
import './css/common.css'

import Header from './components/header.js'
import ChatContent from './components/chatContent.js'

class Chat extends Component {
  render() {
    return (
      <div id='chat'>
        <Header />
        <div id='content' className='flex-property justify-content-between'>
          <div className='side-menu'>left</div>
          <ChatContent />
          <div className='side-menu'>right</div>
        </div>
      </div>
    )
  }
}

export default Chat;
