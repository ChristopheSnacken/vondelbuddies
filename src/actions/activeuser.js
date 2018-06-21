export const ACTIVE_USER_UPDATE = "ACTIVE_USER_UPDATE"
export const SET_USER = "SET_USER"

export const updateUser = (user) =>  {
  console.log(user)
  return {
    type: ACTIVE_USER_UPDATE,
    payload: user
  }
}


export const setUser = (user) =>  {
  console.log(user)
  return {
    type: SET_USER,
    payload: user
  }
}