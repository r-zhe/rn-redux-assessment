import {
  GET_USERS,
  EDIT_USER,
  ADD_USER,
  CLEAR_USERS
} from '../action-types/index'

const initialState = {
  users:[]
};

export default (state = initialState, action) => {
  switch(action.type){

    case ADD_USER:
      return {
        ...state,
        users:[...state.users,...action.newUser]
      }

    case EDIT_USER:
      return{
        ...state,
        users: state.users.map(user => {
          if(user.id === action.id){
            console.log("SELECTED ID",user.id)
            console.log()
          }
          else{

          }
        })
      }

    case CLEAR_USERS:
      return{
        users:[]
      }

    default:
      return state
  }
}