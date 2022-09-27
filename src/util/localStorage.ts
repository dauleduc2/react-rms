export const saveAuthKeyIntoLocalStorage = (key: string) => {
  localStorage.setItem('authKey', key);
};

export const getAuthKeyFromLocalStorage = () => {
  return localStorage.getItem('authKey');
};

export const clearAuthKeyFromLocalStorage = () => {
  localStorage.removeItem('authKey');
};
