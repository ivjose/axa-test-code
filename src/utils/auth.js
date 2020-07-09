const isBrowser = typeof window !== `undefined`;

export const getToken = () =>
  window.localStorage.axaToken && JSON.parse(window.localStorage.axaToken);

export const setToken = (token) =>
  (window.localStorage.axaToken = JSON.stringify(token));

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const token = getToken();

  return !!token;
};

export const clearToken = () => {
  if (!isBrowser) return;
  setToken('');
  //   callback();
};
