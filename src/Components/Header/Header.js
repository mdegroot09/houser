import React, {Component} from 'react'

export default class Header extends Component {
  render (){
    return (
      <div className='houserHeader'>
        <img className='houserIcon' src="http://www.clipartroo.com/images/4/house-black-and-white-clipart-4500.png" alt=""/>
        <h2>Houser</h2>
      </div>
    )
  }
}