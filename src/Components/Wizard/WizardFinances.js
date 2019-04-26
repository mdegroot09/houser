import React, {Component} from 'react'
import store, {UPDATE_MORTGAGE, UPDATE_RENT, UPDATE_HOUSES_LIST} from '../../store' 
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends Component {
  constructor(props){
    super(props)
    const reduxState = store.getState()
    this.state ={
      newMortgage: '',
      newRent: '',
      newHouse: {
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip,
        img: reduxState.img,
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      }
    }
  }

  componentDidMount = () => {
    store.subscribe(() => {
      const reduxState = store.getState()
      console.log('reduxState:', reduxState)
      this.setState({newHouse: {
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip,
        img: reduxState.img,
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      }})
    })
  }

  updateInput(e){
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  submitNewHouse = () => {
    axios.post('/api/house/', this.state.newHouse).then(res => {
      store.dispatch({
        type: UPDATE_HOUSES_LIST,
        payload: res.data
      })
    })
  }

  updateStore = () => {
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: this.state.newMortgage
    })
    store.dispatch({
      type: UPDATE_RENT,
      payload: this.state.newRent
    })
    setTimeout(() => {
      this.submitNewHouse()
    }, .3);
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
              <p>Monthly Mortgage Amount</p>
              <input name='newMortgage' onChange={(e) => this.updateInput(e)} type="text"/>
            </div>
            <div className='inputSection'>
              <p>Desired Monthly Rent</p>
              <input name='newRent' onChange={(e) => this.updateInput(e)} type="text"/> 
            </div>
          </div>
          <Link to='/wizard/URL'>
            <button className='nextStep'>Previous</button>
          </Link>
          <Link to='/'>
            <button onClick={() => this.updateStore} className='nextStep completeBtn'>Complete</button>
          </Link>
        </div>
      </div>
    )
  }
}