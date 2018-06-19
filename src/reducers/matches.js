import { UPDATE_MATCHES } from '../actions/matches'

const initialState = [
    { id: 0, name: 'Henk de Vries', age: 30, level: 0, park: 'Vondelpark', sports: ['Running',] , new: true, bio: "", accepted: false, rejected: false},
    { id: 1, name: 'Piet Klaassen', age: 32, level: 1, park: 'Vondelpark', sports: ['Skating','Running'] , new: false, bio: "", accepted: false, rejected: false},
    { id: 2, name: 'Truus Jansma', age: 31, level: 2, park: 'Vondelpark', sports: ['Tourist Egging',] , new: true, bio: "", accepted: false, rejected: false},
    { id: 3, name: 'Ingrid Schipper', age: 20, level: 1, park: 'Vondelpark', sports: ['Bootcamp',] , new: false, bio: "", accepted: false, rejected: false},
    { id: 4, name: 'Joop Jansen', age: 62, level: 0, park: 'Vondelpark', sports: ['Running',] , new: true, bio: "", accepted: false, rejected: false},
    { id: 5, name: 'Jantje Smit', age: 32, level: 0, park: 'Vondelpark', sports: ['Skating',] , new: true, bio: "", accepted: false, rejected: false},
    { id: 6, name: 'Piet Paulesma', age: 62, level: 0, park: 'Vondelpark', sports: ['Tourist Egging',] , new: true, bio: "", accepted: false, rejected: false},
    { id: 7, name: 'Gerrit Hiemstra', age: 62, level: 0, park: 'Vondelpark', sports: ['Running',] , new: true, bio: "", accepted: false, rejected: false},
]

const reducer = (state = initialState, action ) => {
  console.log("init", action);
  switch(action.type) {
    case UPDATE_MATCHES:
      return [...action.payload]
    default:
      return state
  }
}
export default reducer
