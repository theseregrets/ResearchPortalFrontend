function login(data) {
  return {
    type: 'LOGIN',
    access: data.access,
    refresh: data.refresh,
    isStudent: data.isStudent,
  };
}

export default login;
