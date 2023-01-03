import { Link } from "react-router-dom";
import React from "react";
import { categories } from "../../Data";

export const Categories = () => {
  return (
    <>
      <section id="category">
        <div className="container pt-5">
          <div className="row">
            {categories.map((item, id) => (
              <div className="cat_item col-lg-4 col-md-6 p-3" key={id}>
                <div className="h-100 position-relative">
                  <img src={item.img} alt="" />
                  <div className="overLay">
                    <div className="d-flex justify-content-center align-items-center flex-column h-100 text-light">
                      <h2 className="fw-bold">{item.title}</h2>
                      <Link to="/products">
                        <button className="btn btn-light text-secondary mt-2">
                          Shop Now
                        </button>
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
