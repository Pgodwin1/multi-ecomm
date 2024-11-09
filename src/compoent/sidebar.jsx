import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const name = localStorage.getItem("username")
function Sidebar() {
  const navigate = useNavigate()

  const handleLogout =() => {
    // Clear authentication data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("username");

    // Redirect to login page
    navigate("/");
  }
  return (
    // sidebar mobile menu & sidebar cart - start
    <div className="sidebar-menu-wrapper">
      <div className="cart_sidebar">
        <button type="button" className="close_btn">
          <i className="fal fa-times"></i>
        </button>

        <ul className="cart_items_list ul_li_block mb_30 clearfix">
          <li>
            <div className="item_image">
              <img src="assets/images/cart/img_01.jpg" alt="image_not_found" />
            </div>
            <div className="item_content">
              <h4 className="item_title">Yellow Blouse</h4>
              <span className="item_price">$30.00</span>
            </div>
            <button type="button" className="remove_btn">
              <i className="fal fa-trash-alt"></i>
            </button>
          </li>
          <li>
            <div className="item_image">
              <img src="assets/images/cart/img_01.jpg" alt="image_not_found" />
            </div>
            <div className="item_content">
              <h4 className="item_title">Yellow Blouse</h4>
              <span className="item_price">$30.00</span>
            </div>
            <button type="button" className="remove_btn">
              <i className="fal fa-trash-alt"></i>
            </button>
          </li>
          <li>
            <div className="item_image">
              <img src="assets/images/cart/img_01.jpg" alt="image_not_found" />
            </div>
            <div className="item_content">
              <h4 className="item_title">Yellow Blouse</h4>
              <span className="item_price">$30.00</span>
            </div>
            <button type="button" className="remove_btn">
              <i className="fal fa-trash-alt"></i>
            </button>
          </li>
        </ul>

        <ul className="total_price ul_li_block mb_30 clearfix">
          <li>
            <span>Subtotal:</span>
            <span>$90</span>
          </li>
          <li>
            <span>Vat 5%:</span>
            <span>$4.5</span>
          </li>
          <li>
            <span>Discount 20%:</span>
            <span>- $18.9</span>
          </li>
          <li>
            <span>Total:</span>
            <span>$75.6</span>
          </li>
        </ul>

        <ul className="btns_group ul_li_block clearfix">
          <li>
            <a href="shop_cart.html">View Cart</a>
          </li>
          <li>
            <a href="shop_checkout.html">Checkout</a>
          </li>
        </ul>
      </div>

      <div className="sidebar_mobile_menu">
        <button type="button" className="close_btn">
          <i className="fal fa-times"></i>
        </button>

        <div className="msb_widget brand_logo text-center">
          <a href="index.html" style={{ width: "300px" }}>
            <img
              src="assets/logo.png"
              alt="logo_not_found"
              style={{ marginTop: "-80px", height: "100px", width: "100%", maxWidth: "100%" }}
            />
          </a>
        </div>

        <div className="msb_widget mobile_menu_list clearfix">
          <h3 className="title_text mb_15 text-uppercase">
            <i className="far fa-bars mr-2"></i> Menu List
          </h3>
          <ul className="ul_li_block clearfix">
            <li className="active dropdown">
              <a
                href="#!"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </a>
            </li>
            <li className="dropdown">
              <a
                href="/aboutus"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About US
              </a>
            </li>
            <li className="dropdown">
              <a
                href="/ourservice"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Our Services
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#!"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown">
                  <a
                    href="#!"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop Inner Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="shop_cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="shop_checkout.html">Checkout Step 1</a>
                    </li>
                    <li>
                      <a href="shop_checkout_step2.html">Checkout Step 2</a>
                    </li>
                    <li>
                      <a href="shop_checkout_step3.html">Checkout Step 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="404.html">404 Page</a>
                </li>
                <li className="dropdown">
                  <a
                    href="#!"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blogs
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog.html">Blog Page</a>
                    </li>
                    <li>
                      <a href="blog_details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#!"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Compare
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="compare_1.html">Compare V.1</a>
                    </li>
                    <li>
                      <a href="compare_2.html">Compare V.2</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    to="/signup"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Register
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/login">Login</a>
                    </li>
                    <li>
                      <a href="/signup">Sign Up</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="user_info">
          <h3 className="title_text mb_30 text-uppercase">
            <i className="fas fa-user mr-2"></i> User Info
          </h3>
          <div className="profile_info clearfix">
            <div className="user_thumbnail">
              <img
                src="assets/images/meta/img_01.png"
                alt="thumbnail_not_found"
              />
            </div>
            <div className="user_content">
              <h4 className="user_name">{name}</h4>
              <span className="user_title">Seller</span>
            </div>
          </div>
          <ul className="settings_options ul_li_block clearfix">
            <li>
              <a href="/profile">
                <i className="fal fa-user-circle"></i> Profile
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fal fa-user-cog"></i> Settings
              </a>
            </li>
            <li>
              <button onClick={handleLogout}>
                <i className="fal fa-sign-out-alt"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="overlay"></div>
    </div>
    // {/* <!-- sidebar mobile menu & sidebar cart - end */}
  );
}

export default Sidebar;
