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
      return state;
    case 'SIGNUP':
      return {
        ...initialState,
        isLogged: false,
      };
    case 'CONTACTS':
      return {
        ...initialState,
        contacts: action.contacts,
      };
    case 'DEPT':
      return {
        ...initialState,
        department: action.department,
      };
    case 'CV':
      return {
        ...initialState,
        cv: action.cv,
      };
    case 'CGPA':
      return {
        ...initialState,
        cgpa: action.cgpa,
      };
    case 'STATEMENT':
      return {
        ...initialState,
        research_statement: action.research_statement,
      };
    case 'FEEDBACK':
      return {
        ...initialState,
        feedback: action.feedback,
      };
    default:
      return initialState;
  }
};

export default Profile;
