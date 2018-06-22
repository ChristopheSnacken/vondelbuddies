import { db } from '../firebase';

export const ACTIVE_USER_UPDATE = "ACTIVE_USER_UPDATE"
export const SET_USER = "SET_USER"


export const updateUser = (user) =>  {
  return {
    type: ACTIVE_USER_UPDATE,
    payload: user
  }
}

export const setUserInit = (userObj) =>  {
  return {
    type: SET_USER,
    payload: userObj
  }
}

const generateIMG = () => Math.floor(Math.random() * 4)

export const setUser = (id) =>  {
  return function (dispatch) {
    db.onceGetUsers()
      .then(snapshot => {
        let users = Object.values(snapshot.val())
        let userObj = users.find(user=>user.id===id)
        let finalUserObj = {
          ...userObj,
          bio:'This is my super cool bio', 
          img:generateIMG(), 
          park:'Vondelpark', 
          phone:'0625273211'
        }
        
        dispatch(setUserInit(finalUserObj))
    })
  }  
}