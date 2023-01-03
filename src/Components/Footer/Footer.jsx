import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <>
      <footer className="shadow ">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4 px-5">
              <h2 className="fw-bolder fs-2">Store</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                earum corrupti sint error nisi cum autem fugit aut, animi
                aspernatur.
              </p>
              <div>
                <ul className="list-unstyled d-flex">
                  <li className="footer_icons icon1">
                    <FacebookOutlinedIcon />
                  </li>
                  <li className="footer_icons icon2">
                    <InstagramIcon />
                  </li>
                  <li className="footer_icons icon3">
                    <TwitterIcon />
                  </li>
                  <li className="footer_icons icon4">
                    <PinterestIcon />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 px-5">
              <h2>Useful Links</h2>
              <div className="d-flex justify-content-between">
                <ul className="list-unstyled">
                  <li>Home</li>
                  <li>Cart</li>
                  <li>Man Fashion</li>
                  <li>Accessories</li>
                  <li>My Account</li>
                </ul>
                <ul className="list-unstyled">
                  <li>My Account</li>
                  <li>WoMan Fashion</li>
                  <li>Order Tracking</li>
                  <li>Wishlist</li>
                  <li>Terms</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 px-5">
              <h2>Contact</h2>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <LocationOnIcon /> 622 Dixie Path , South Tobinchester 98336
                </li>
                <li>
                  {" "}
                  <LocalPhoneIcon /> +1 234 56 78
                </li>
                <li>
                  {" "}
                  <EmailIcon /> contact@Diva.com
                </li>
              </ul>
              <img
                src="https://i.ibb.co/Qfvn4z6/payment.png"
                className="w-75"
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
