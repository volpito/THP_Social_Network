import { BUY_RICES } from './ricesTypes';
import { EAT_RICES } from './ricesTypes';

export const buyRices = () => {
  return {
    type: BUY_RICES
  };
};

export const eatRices = () => {
  return {
    type: EAT_RICES
  };
};
