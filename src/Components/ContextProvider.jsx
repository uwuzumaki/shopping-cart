import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const StoreDataContext = createContext(null);
export const UserCartContext = createContext(null);

// Calls an API, gets the data, stores it, and grants access to it across components through the use of context api.
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
    <StoreDataContext.Provider value={{ store }}>
      <UserCartContext.Provider value={{ cart, setCart }}>
        {children}
      </UserCartContext.Provider>
    </StoreDataContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
