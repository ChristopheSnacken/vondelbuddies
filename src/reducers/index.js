import { combineReducers } from 'redux'
import activeUser from './activeUser'
import matches from './matches'

export default combineReducers({
  activeUser,
  matches
})
