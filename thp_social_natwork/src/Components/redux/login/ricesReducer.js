import { BUY_RICES } from './ricesTypes';
import { EAT_RICES } from './ricesTypes';

const initialStateRices = {
  rices:3
};

const ricesReducer = (state = initialStateRices, action) => {
  switch(action.type) {
    case BUY_RICES:
      return {
        ...state,
        rices: state.rices + 1
      };
    case EAT_RICES:
      return {
        ...state,
        rices: state.rices - 1
      };
    default:
      return state;
  }
}

export default ricesReducer;
