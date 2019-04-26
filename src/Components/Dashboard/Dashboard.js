import React, {Component} from 'react'
import axios from 'axios'
import store, {UPDATE_HOUSES_LIST} from '../../store'
import House from '../House/House'
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    const reduxState = store.getState()
    this.state = {
      houses: reduxState.houses
    }
  }

  componentDidMount = () => {
    store.subscribe(() => {
      let reduxState = store.getState()
      this.setState({houses: reduxState.houses})
    })
  }

  componentWillMount = () => {
    axios.get('/api/houses').then(res => {
      console.log('First GET request response:', res.data)
      store.dispatch({
        type: UPDATE_HOUSES_LIST,
        payload: res.data
      })
    })
  }
  
  deleteHouse(key){
    let houseToDelete = this.state.houses[key]
    // axios.delete(`/api/house/${houseToDelete.id}`).then(res => {
    //   this.location.reload()
    // })
  }

  render(){
    return (
      <div className='dashBottom'>
        <div className='lightDiv'>
          <div className='topOfDash'>
            <h2 className='dashboard'>Dashboard</h2>
            <Link to='/wizard'>
              <button className='addNew'>Add New</button>
            </Link>
          </div>
          <div className='listings'>
            <House 
              houses={this.state.houses}
              deleteHouse={this.deleteHouse}
            />
          </div>
        </div>
      </div>
    )
  }
}