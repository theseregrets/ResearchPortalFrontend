import state from '../state';

const Profile = (initialState = state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...initialState,
        isLogged: true,
        jwt: action.access,
        refresh: action.refresh,
        isStudent: action.isStudent,
        username: action.username,
        first_name: action.first_name,
        last_name: action.last_name,
        email: action.email,
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
    case 'TEACHER-CONTACTS':
      return {
        ...initialState,
        contacts: action.contacts,
      };
    case 'TEACHER-DEPT':
      return {
        ...initialState,
        department: action.department,
      };
    default:
      return initialState;
  }
};

export default Profile;
