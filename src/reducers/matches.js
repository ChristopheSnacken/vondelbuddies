import { UPDATE_MATCHES, SET_MATCHES } from '../actions/matches'

const initialState= []

const reducer = (state = initialState, action ) => {
  console.log("init", action);
  switch(action.type) {
    case UPDATE_MATCHES:
      return [...action.payload]
    case SET_MATCHES:
      return action.payload 
    default:
      return state
  }
}
export default reducer
