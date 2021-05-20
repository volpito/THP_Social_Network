import { LOGIN } from './loginTypes';
import Cookies from 'js-cookie'

const initialState = {
  token: false
}; 

const login = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        token: Cookies.get('tokenLogin')
      };

    default:
      return state;
  }
}

export default login;
