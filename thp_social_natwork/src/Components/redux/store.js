import { createStore, combineReducers } from 'redux';
import registerReducer from './register/registerReducer';


const rootReducer = combineReducers({
  token: registerReducer
  //login: loginReducer
})

let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

export default store;