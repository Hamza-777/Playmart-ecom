const setAuth = (data) => {
  localStorage.setItem('auth', data);
};

const getAuth = () => {
  return localStorage.getItem('auth') ? localStorage.getItem('auth') : null;
};

const removeAuth = () => {
  localStorage.removeItem('auth');
};

export { setAuth, getAuth, removeAuth };
