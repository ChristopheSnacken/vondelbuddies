export const ACTIVE_USER_UPDATE = "ACTIVE_USER_UPDATE"

export const updateUser = (user) =>  {
  console.log(user)
  return {
    type: ACTIVE_USER_UPDATE,
    payload: user
  }
}
