import state from '../state';

const UpdateProfile = (initialState = state, action) => {
  switch (action.type) {
    case 'TEACHER':
      return {
        ...initialState,
        department: action.department,
        contacts: action.contacts,
      };
    default:
      return initialState;
  }
};

export default UpdateProfile;
