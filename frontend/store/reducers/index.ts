import { SET_USER } from '../actions';

const initialState = {
  token: '',
  email: '',
}

export default function reducer(state = initialState, action: any) {
  if(action.type === 'SET_USER') {
    return { ...state, token: action.payload.token, email: action.payload.email }
  }
  return state
}