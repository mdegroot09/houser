import React, {Component} from 'react'

export default class House extends Component {

  render(){
    let houses = this.props.houses.map((house, i) => {
      return(
        <div className='listing' key={i}>
          <img src={house.img} alt=""/>
          <div className='houseData'>
            <div className='propertyData'>
              <p>Property Name: {house.name}</p>
              <p>Address: {house.address}</p>
              <p>City: {house.city}</p>
              <p>State: {house.state}</p>
              <p>Zip: {house.zip}</p>
            </div>
            <div className='propertyData'>
              <p>Monthly Mortgage: {house.mortgage}</p>
              <p>Desired Rent: {house.rent}</p>
              <button onClick={() => this.props.deleteHouse(i)}>Delete</button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        {houses}
      </div>
    )
  }
}