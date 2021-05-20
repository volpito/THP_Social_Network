import { createStore, combineReducers } from 'redux';
import registerReducer from './register/registerReducer';
import loginReducer from './login/loginReducer';


const rootReducer = combineReducers({
  registerToken: registerReducer,
  loginToken: loginReducer
})

let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));


export default store;