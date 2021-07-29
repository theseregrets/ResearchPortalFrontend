import { createStore } from 'redux';
import Reducer from './reducer';

const state = {
  isLogged: false,
};

export default store = createStore(Reducer, state);
