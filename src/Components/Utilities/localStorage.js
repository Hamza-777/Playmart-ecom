// Auth Storages
const setAuth = (data) => {
  localStorage.setItem('auth', data);
};

const getAuth = () => {
  return localStorage.getItem('auth') ? localStorage.getItem('auth') : null;
};

const removeAuth = () => {
  localStorage.removeItem('auth');
};

// User Data Storage
const setUser = (data) => {
  localStorage.setItem('userData', JSON.stringify(data));
};

const getUser = () => {
  return localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('auth'))
    : null;
};

const removeUser = () => {
  localStorage.removeItem('userData');
};

export { setAuth, getAuth, removeAuth, setUser, getUser, removeUser };
