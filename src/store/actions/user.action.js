import axios from 'axios'
import { actionTypes } from '../actionsTypes'

export function getPersonal(data) {
  return (dispatch) => {
    dispatch({ type: actionTypes.USER_REQUEST })
    return axios
      .get(`https://randomuser.me/api/?results=28`, data)
      .then((response) => {
        dispatch({ type: actionTypes.USER_SUCCESS })
        localStorage.setItem('userAll', JSON.stringify(response?.data?.results))

        return response.data
      })
      .catch((err) => {
        dispatch({ type: actionTypes.USER_FAILED })
        throw err.response
      })
  }
}
