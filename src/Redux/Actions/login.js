function login(data) {
  const {
    access,
    refresh,
    isStudent,
    user: { username, first_name, last_name, email },
  } = data;
  return {
    type: 'LOGIN',
    access,
    refresh,
    isStudent,
    username,
    first_name,
    last_name,
    email,
  };
}

export default login;
