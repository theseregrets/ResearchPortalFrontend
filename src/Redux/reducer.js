import state from './state';

const Reducer = (initialState = state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...initialState,
        isLogged: true,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        isLogged: false,
      };
    default:
      return initialState;
  }
};

export default Reducer;
