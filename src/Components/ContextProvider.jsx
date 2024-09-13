/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const StoreDataContext = createContext(null);
export const UserCartContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [store, setStore] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        if (!data.ok) {
          throw new Error(`HTTP Error: Status ${data.status}`);
        }
        const json = await data.json();
        setStore(json);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <StoreDataContext.Provider value={{ store, setStore }}>
      <UserCartContext.Provider value={{ cart, setCart }}>
        {children}
      </UserCartContext.Provider>
    </StoreDataContext.Provider>
  );
};

export default ContextProvider;
