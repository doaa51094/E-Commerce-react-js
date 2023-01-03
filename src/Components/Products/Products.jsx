import React, { useContext, useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import axios from "axios";
import { CounterContext } from "../../Context/CounterContext";
import { popularProducts } from "../../Data";

const Products = () => {
  const { count, increase, increaseCartQuantity } = useContext(CounterContext);
  const [allProducts, setAllProducts] = useState();
  // api for all products
  async function getData() {
    let { data } = await axios.get("https://fakestoreapi.com/products"); 
    setAllProducts(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section id="products" className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* map to display all products */}
            {allProducts?.map((item, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="product_item  position-relative">
                  <img src={item.image} className="w-100 h-100" alt="" />
                  {/* layers for imgs */}
                  <div className="layer_product">
                    <div>
                      <AddShoppingCartIcon
                        className="bg-icon p-1"
                        color="secondary"
                        onClick={() =>
                          increaseCartQuantity(
                            item.id,
                            item.image,
                            item.title,
                            item.price
                          )
                        }
                      />
                      <FavoriteBorderIcon
                        className="bg-icon p-1 mx-2"
                        color="secondary"
                        onClick={increase}
                      />
                      <Link to={"/productList/" + item.id}>
                        <SearchIcon color="secondary" className="bg-icon p-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
