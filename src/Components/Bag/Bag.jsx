import React, { useContext, useEffect, useState } from "react";
import CounterContextProvider, {
  CounterContext,
} from "../../Context/CounterContext";
import { popularProducts } from "../../Data";

const Bag = () => {
  const {
    getItemsQuantity,
    removeItemFromCart,
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useContext(CounterContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems?.map((i) => {
      total += i.price * i.quantity;
    });
    setTotal(total);
    console.log(total);
  }, [cartItems]);
  return (
    <>
      <section className="py-5 bag">
        <div className="container text-center">
          <h2 className="text-muted fw-bolder mb-5">YOUR BAG</h2>
          <div className="row">
            {/* display products */}
            <table className="table bg-light">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quentity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove Item</th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((item, i) => (
                  <tr key={i}>
                    <th scope="row">
                      <img src={item.image} className="cart_img " alt="" />
                    </th>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price * item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>Total $ {total.toFixed(1)}</h2>
        </div>
      </section>
    </>
  );
};

export default Bag;
