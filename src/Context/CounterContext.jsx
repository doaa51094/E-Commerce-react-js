import { createContext, useState } from "react";

export let CounterContext = createContext({});

function CounterContextProvider(props) {
  let [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  // to get quantity of products
  const cartQuentity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const increaseCartQuantity = (id, image, title, price) => {
    setCartItems((currItem) => {
      if (currItem.find((item) => item.image === image) == null) {
        return [...currItem, { id, quantity: 1, image, title, price }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    if (cartQuentity <= 0) {
      return;
    }
    setCartItems((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return cartItems.filter((item) => item.id != id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItemFromCart = (id) => {
    setCartItems((currItem) => currItem.filter((item) => item.id != id));
  };

  // to icrease in favorite icon
  function increase() {
    setCount(count + 1);
  }

  return (
    <CounterContext.Provider
      value={{
        count,
        cartItems,
        cartQuentity,
        increase,
        getItemsQuantity,
        cartQuentity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;
