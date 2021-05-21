import { GET_USERS_REQUESTED, GET_USER_SUCCESS, GET_USER_FAILED } from './Types'
export const getUser = () => {
  return {
    type: GET_USERS_REQUESTED
  }
}
export const userSuccess = () => {
  return {
    type: GET_USER_SUCCESS
  }
}
export const userFailed = () => {
  return {
    type: GET_USER_FAILED
  }
}