const useStorageService = () => {
  const getItems = (name) => (localStorage.length ? JSON.parse(localStorage.getItem(name)) : []);

  const setItem = (name, val) => {
    const oldArr = getItems(name) ? getItems(name) : [];
    localStorage.setItem(name, JSON.stringify([...oldArr, val]));
  };

  const removeItem = (name, id) => {
    const oldArr = getItems(name) ? getItems(name) : [];
    const newArr = oldArr.filter(({ city }) => city.id !== id);
    localStorage.setItem(name, JSON.stringify(newArr));
  };

  const removeAll = () => localStorage.clear();

  return { getItems, setItem, removeItem, removeAll };
};

export default useStorageService;
