import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div id='header' className='flex-property justify-content-between'>
        <div className='side-header-menu flex-property'>
          <form className='flex-property'>
            <input className='header-search lato' placeholder="search" />
          </form>
        </div>
        <div className='middle-header'>

        </div>
        <div className='side-header-menu'>

        </div>
      </div>
    )
  }
}

export default Header;
