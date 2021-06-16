import {
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

      let tempUsers = [...state.users]
      let idxToBeModified = tempUsers.findIndex(user => user.id === action.newUser.id)
      tempUsers[idxToBeModified] = action.newUser

      return{
        ...state,
        users: [...tempUsers]
      }

    case CLEAR_USERS:
      return{
        users:[]
      }

    default:
      return state
  }
}