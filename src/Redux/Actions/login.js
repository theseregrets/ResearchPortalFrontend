function login(data) {
  return {
    type: 'LOGIN',
    access: data.access,
    refresh: data.refresh,
  };
}

export default login;
