import { SET_USER, ACTIVE_USER_UPDATE } from '../actions/activeuser'

const initialState = {
    id: 0,
    name: 'Henk de Vries',
    age: 30,
    level: 0,
    gender: '',
    park: 'Vondelpark',
    sports: ['Running',],
    new: true,
    bio: "",
    interest: ""
}



const reducer = (state = initialState, action ) => {
    console.log('reducer');
    switch(action.type) {
      case SET_USER:
        return action.payload  
      case ACTIVE_USER_UPDATE:
        return action.payload
      default:
        return state
    }
  }
  export default reducer
  