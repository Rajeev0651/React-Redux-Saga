import { GET_USERS_REQUESTED, GET_USER_SUCCESS, GET_USER_FAILED } from "./Types"
const intialState = {
  fetched: 1,
  users: [],
  loading: true,
  error: null
}
const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUESTED: return {
      ...state,
      loading: true,
    }
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: state.fetched + 1,
        users: action.users
      }
    case GET_USER_FAILED: return {
      ...state,
      loading: false,
      error: action.message
    }
    default: return state
  }
}

export default Reducer