import { combineReducers } from 'redux'
import users from './users'
import activeUser from './activeUser'
import matches from './matches'

	export default combineReducers({
        users,
        activeUser,
        matches
})
