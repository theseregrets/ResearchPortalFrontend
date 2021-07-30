import state from '../state';

const Auth = (initialState = state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...initialState,
        isLogged: true,
        jwt: action.access,
        refresh: action.refresh,
        isStudent: action.isStudent,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        isLogged: false,
      };
    case 'SIGNUP':
      return {
        ...initialState,
        isLogged: false,
      };
    default:
      return initialState;
  }
};

export default Auth;
