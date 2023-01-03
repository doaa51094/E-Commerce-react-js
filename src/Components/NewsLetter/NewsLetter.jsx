import React from "react";
import SendIcon from "@mui/icons-material/Send";

const NewsLetter = () => {
  return (
    <>
      <section id="newsLetter" className="py-4">
        <div className="newsLetter_layer">
          <div className="container py-5 d-flex justify-content-center">
            <div className="w-100">
              <h2 className="pb-2">NewsLetter</h2>
              <p className="lead">
                Get timely updates from your favorite products.
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <input type="text" placeholder="Your Email" className="px-3" />
                <button className="btn_NewsLetter">
                  <SendIcon className="Icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
