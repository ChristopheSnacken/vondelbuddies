import { db } from '../firebase';

export const UPDATE_MATCHES = "UPDATE_MATCHES"
export const SET_MATCHES = "SET_MATCHES"

export const setMatches = (matches) =>  {
  return {
    type: SET_MATCHES,
    payload: matches
  }
}

export const setMatchesInit = () =>  {
  return function (dispatch) {
    db.onceGetUsers()
      .then(snapshot => {
      dispatch(setMatches(Object.values(snapshot.val())))
    })
  }
}

export const updateMatches = (matches) =>  {
  return {
    type: UPDATE_MATCHES,
    payload: matches
  }
}
