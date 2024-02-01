export const setSession = (userData) => {
  const setUser = JSON.stringify(userData);
  sessionStorage.setItem("user", setUser);
};

export const getSession = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};
