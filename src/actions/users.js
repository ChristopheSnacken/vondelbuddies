export const USERS = "USERS"

export const updateMatches = (user) =>  {
  return {
    type: USERS,
    payload: user
  }
}
