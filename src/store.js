import {createStore} from 'redux';

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  mortgage: "",
  rent: "",
  houses: [{
    name: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    img: "",
    mortgage: "",
    rent: "",
  }]
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_STATE = 'UPDATE_STATE'
export const UPDATE_ZIP = 'UPDATE_ZIP'
export const UPDATE_IMG = 'UPDATE_IMG'
export const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
export const UPDATE_RENT = 'UPDATE_RENT'
export const UPDATE_HOUSES_LIST = 'UPDATE_HOUSES_LIST'

function reducer(reduxState = initialState, action){
  switch (action.type) {
    case UPDATE_NAME:
      return {...reduxState, name: action.payload};
    case UPDATE_ADDRESS:
      return {...reduxState, address: action.payload};
    case UPDATE_CITY:
      return {...reduxState, city: action.payload}
    case UPDATE_STATE:
      return {...reduxState, state: action.payload}
    case UPDATE_ZIP:
      return {...reduxState, zip: action.payload}
    case UPDATE_IMG:
      return {...reduxState, img: action.payload}
    case UPDATE_MORTGAGE:
      return {...reduxState, mortgage: action.payload}
    case UPDATE_RENT:
      return {...reduxState, rent: action.payload}
    case UPDATE_HOUSES_LIST:
      return {
        name: "",
        address: "",
        city: "",
        state: "",
        zip: 0,
        img: "",
        mortgage: "",
        rent: "",
        houses: action.payload}
    default:
      return reduxState;
  }
}

export default createStore(reducer)