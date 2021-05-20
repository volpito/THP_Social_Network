import { REGISTER } from './registerTypes';
import Cookies from 'js-cookie'

const initialState = {
  token: false
};

const register = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER:
      return {
        ...state,
        token: Cookies.get('tokenRegister')
      };

    default:
      return state;
  }
}

export default register;
