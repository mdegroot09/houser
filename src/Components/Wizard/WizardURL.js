import React, {Component} from 'react'
import store, {UPDATE_IMG} from '../../store' 
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
  constructor(props){
    super(props)
    this.state ={
      newURL: ''
    }
  }

  updateInput(e){
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  updateStore = () => {
    store.dispatch({
      type: UPDATE_IMG,
      payload: this.state.newURL
    })
  }
  
  render (){
    let houses;
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
              <p>Image URL</p>
              <input name='newURL' onChange={(e) => this.updateInput(e)} type="text"/>
            </div>
          </div>
          <Link to='/wizard'>
            <button className='nextStep'>Previous</button>
          </Link>
          <Link to='/wizard/finances'>
            <button onClick={() => this.updateStore} className='nextStep'>Next Step</button>
          </Link>
        </div>
      </div>
    )
  }
}