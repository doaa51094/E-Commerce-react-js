import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CounterContext } from "../Context/CounterContext";

const ProductList = () => {
  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useContext(CounterContext);
  let parms = useParams();
  let id = parms;
  const quantity = getItemsQuantity(id);
  const [Product, setProduct] = useState();
  async function getData() {
    let { data } = await axios.get(
      `https://fakestoreapi.com/products/${parms.id}`
    );
    setProduct(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="product_img p-5">
                <img src={Product?.image} className="w-100" alt="" />
              </div>
            </div>
            <div className="col-md-8 p-5 d-flex align-items-center">
              <div className="product_content text-muted">
                <h4>
                  <strong>Title : </strong>
                  {Product?.title}
                </h4>
                <h4>
                  <strong>Category : </strong>
                  {Product?.category}
                </h4>
                <h4>
                  <strong>Description : </strong>
                </h4>
                <p className="lead">{Product?.description}</p>
                <h4 className="text-danger">
                  <strong>Price : </strong>
                  {Product?.price}
                </h4>
                <h4>
                  <strong>Count : </strong>
                  {Product?.rating.count}
                </h4>
                <h4>
                  <strong>Rate : </strong>
                  {Product?.rating.rate}
                </h4>
                <div className="my-3 ">
                  <button
                    className="btn btn-info"
                    onClick={() =>
                      decreaseCartQuantity(
                        id,
                        Product?.image,
                        Product?.title,
                        Product?.price
                      )
                    }
                  >
                    {" "}
                    -{" "}
                  </button>
                  <strong className="px-2"> {quantity} </strong>
                  <button
                    className="btn btn-info "
                    onClick={() =>
                      increaseCartQuantity(
                        id,
                        Product?.image,
                        Product?.title,
                        Product?.price
                      )
                    }
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <button
                  className="btn btn-danger mt-2"
                  onClick={() =>
                    increaseCartQuantity(
                      id,
                      Product?.image,
                      Product?.title,
                      Product?.price
                    )
                  }
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
