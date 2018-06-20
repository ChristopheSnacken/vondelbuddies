export const UPDATE_MATCHES = "UPDATE_MATCHES"

export const updateMatches = (matches) =>  {
  console.log(matches);
  return {
    type: UPDATE_MATCHES,
    payload: matches
  }
}
