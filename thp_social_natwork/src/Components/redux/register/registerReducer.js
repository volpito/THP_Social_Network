import { REGISTER } from './pastasTypes';

const initialState = {
  token: ""
};

const register = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER:
      return {
        ...state,
        token: response.jwt
      };

    default:
      return state;
  }
}

export default register;
