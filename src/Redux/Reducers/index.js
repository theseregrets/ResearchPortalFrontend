import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import profile from './profile';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['profile'],
};

const allReducers = combineReducers({
  profile,
});

export default persistReducer(persistConfig, allReducers);
