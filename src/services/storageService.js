const useStorageService = () => {
  const getItems = (name) =>
    sessionStorage.length ? JSON.parse(sessionStorage.getItem(name)) : [];

  const setItem = (name, val) => {
    const oldArr = getItems(name) ? getItems(name) : [];
    sessionStorage.setItem(name, JSON.stringify([...oldArr, val]));
  };

  const removeItem = (name, id) => {
    const oldArr = getItems(name) ? getItems(name) : [];
    const newArr = oldArr.filter(({ city }) => city.id !== id);
    sessionStorage.setItem(name, JSON.stringify(newArr));
  };

  const removeAll = () => sessionStorage.clear();

  return { getItems, setItem, removeItem, removeAll };
};

export default useStorageService;
