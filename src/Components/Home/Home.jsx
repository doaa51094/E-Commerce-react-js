import React from "react";
import { Categories } from "../Categories/Categories";
import Products from "../Products/Products";
import NewsLetter from "../NewsLetter/NewsLetter";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section id="home">
        <div className="home_item">
          <div className="layer">
            <div className="container ">
              <div className="row">
                <div className="col-md-6 text-light">
                  <h1>SUMMER SALE</h1>
                  <p>
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                    ARRIVALS.
                  </p>
                  <Link to="/products">
                    <button className="btn btn-outline-secondary text-light">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Categories />
      <Products />
      <NewsLetter />
    </>
  );
};
