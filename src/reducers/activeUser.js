import { SET_USER } from '../actions/activeuser'

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
    //   case UPDATE_USER:
    //     return [...action.payload]
      default:
        return state
    }
  }
  export default reducer
  