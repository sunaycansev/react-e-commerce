export const setLocalStorage = (key, data, prevState) => {
  window.localStorage.setItem(key, JSON.stringify([data, ...prevState]));
};
