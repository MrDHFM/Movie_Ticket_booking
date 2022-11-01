import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="marketing-site-footer">
      <div className="row medium-unstack" id="div">
        <div className="medium-4 columns">
          <h4 className="marketing-site-footer-title">Book Ticket</h4>
          <h4 className="marketing-site-footer-name"></h4>
          <p>Social Media</p>
          <ul className="menu marketing-site-footer-menu-social simple">
            <li>
              <a href="#">
                <i className="fa fa-youtube-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="medium-4 columns">
          <h4 className="marketing-site-footer-title">Contact Info</h4>
          <div className="marketing-site-footer-block">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p> Pune</p>
          </div>
          <div className="marketing-site-footer-block">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <p>+91 9848022338</p>
          </div>
          <div className="marketing-site-footer-block">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <p>bookticket@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="marketing-site-footer-bottom">
        <div className="row large-unstack align-middle">
          <div className="column">
            <p style={{ textAlign: "center" }}>
              &copy; 2022 No rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
