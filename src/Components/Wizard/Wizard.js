import React, {Component} from 'react'
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP} from '../../store' 
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
  constructor(props){
    super(props)
    this.state ={
      newName: '',
      newAddress: '',
      newCity: '',
      newState: '',
      newZip: 0
    }
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(e){
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  updateStore = () => {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.newName
    })
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state.newAddress
    })
    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state.newCity
    })
    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state.newState
    })
    store.dispatch({
      type: UPDATE_ZIP,
      payload: this.state.newZip
    })
  }
  
  render (){
    console.log('newName:', this.state.newName)
    return (
      <div className='dashBottom'>
        <div className='lightDiv'>
          <div className='topOfDash'>
            <h2 className='dashboard'>Add New Listing</h2>
            <Link to='/'>
              <button className='cancelBtn'>Cancel</button>
            </Link>
          </div>
          <div>
            <div className='inputSection'>
              <p>Property Name</p>
              <input name='newName' onChange={(e) => this.updateInput(e)} type="text"/>
            </div>
            <div className='inputSection'>
              <p>Address</p>
              <input name='newAddress' onChange={(e) => this.updateInput(e)} type="text"/> 
            </div>
            <div className='inputSection'>
              <p>City</p>
              <input name='newCity' onChange={(e) => this.updateInput(e)} type="text"/>          
            </div>
            <div className='inputSection'>
              <p>State</p>
              <input name='newState' onChange={(e) => this.updateInput(e)} type="text"/>           
            </div>
            <div className='inputSection'>
              <p>Zip</p>
              <input name='newZip' onChange={(e) => this.updateInput(e)} type="text"/>      
            </div>
          </div>
          <Link to='/wizard/URL'>
            <button onClick={() => this.updateStore} className='nextStep'>Next Step</button>
          </Link>
        </div>
      </div>
    )
  }
}