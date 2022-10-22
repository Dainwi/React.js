import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div>
          <h2>Shop</h2>
          <li>
            <a>Chairs</a>
          </li>
          <li>
            <a>Lounge</a>
          </li>
          <li>
            <a>Storage</a>
          </li>
          <li>
            <a>Tables</a>
          </li>
          <li>
            <a>Homewares</a>
          </li>
        </div>
        <div>
          <h2>
            <a>Customer Service</a>
          </h2>
          <li>
            <a>My Account</a>
          </li>
          <li>
            <a>Delivery</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>FAQs</a>
          </li>
          <li>
            <a>Supporting Aussie</a>
          </li>
          <li>
            <a>Care and Warranty</a>
          </li>
          <li>
            <a>Terms and Conditions</a>
          </li>
        </div>
        <div id="social">
            <h2>Follow Us</h2>
            <li><a href="" className="f-icons"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="" className="f-icons"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="" className="f-icons"><i class="fa-brands fa-twitter"></i></a></li>
        </div>
      </section>
    </>
  );
};

export default Footer;
