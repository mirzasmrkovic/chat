import React, { Component } from 'react'

class ChatContent extends Component {
  render() {
    return (
      <div id='chat-content'>
        <div id='chat-msg-container' className='flex-property'>msgs</div>
        <div id='chat-input' className='flex-property'>input</div>
      </div>
    )
  }
}

export default ChatContent;
