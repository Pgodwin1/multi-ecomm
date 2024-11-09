import React, { useState, useEffect } from "react";
import Footer from "../compoent/footer";
import { name } from "../compoent/sidebar";
import CartSidebar from "../compoent/cartSidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddToCartButton from "../compoent/cartItem";
import { base_url } from "../api";

const Details = ({ productItem }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Yellow Blouse",
      price: 30,
      imageUrl: "../assets/images/cart/img_01.jpg",
    },
    {
      id: 2,
      name: "Red Shirt",
      price: 25,
      imageUrl: "../assets/images/cart/img_02.jpg",
    },
  ]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      if (!id) {
        setError("No category selected.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${base_url}/product/get_product/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          const singleProduct = response.data.productData;
          setProductData(singleProduct || []);
        } else {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, [id]);

  const toggleCartSidebar = () => {
    //  setCartOpen((prev) => !prev); // Toggle the sidebar visibility
    setCartOpen(!cartOpen); // Toggle the sidebar visibility
  };

  const closeCartSidebar = () => {
    setCartOpen(false); // Close the sidebar
  };

  const product = {
    id: 1,
    title: "Wireless Audio System Multiroom 360",
    type: "Speakers",
    price: 479.5,
    originalPrice: 685.0,
    description:
      "Donec id massa ut nisl auctor mollis eu nec magna. Duis mattis congue lacus ac elementum.",
    images: [
      {
        id: 1,
        src: "https://media.istockphoto.com/id/1361939986/photo/conceptual-view-of-a-smart-speaker.jpg?s=612x612&w=0&k=20&c=3sMUOSi1Ny9VYFifdRxFlAFPGiicaRoBeWxDy-5SuCo=",
        alt: "Main view",
      },
      {
        id: 2,
        src: "assets/images/details/fashion_minimal/img_01.jpg",
        alt: "Alternate view 1",
      },
      {
        id: 3,
        src: "assets/images/details/fashion_minimal/img_01.jpg",
        alt: "Alternate view 2",
      },
      // Add more images as needed
    ],
    colors: [
      { id: 1, colorCode: "#cc7b4a" },
      { id: 2, colorCode: "#b6b8ba" },
      { id: 3, colorCode: "#dd3333" },
    ],
    sizes: ["48", "50", "52", "54"],
  };

  useEffect(() => {
    // Check if user is logged in, e.g., by verifying a token
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const incrementQuantity = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);
  const decrementQuantity = () =>
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));

  return (
    <div>
      {/* <!-- header_section - start */}
      <header className="header_section simple_shop_header sticky_header clearfix">
        <div className="header_content_wrap d-flex align-items-center">
          <div className="container maxw_1480">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-4">
                <nav className="main_menu clearfix">
                  <ul className="ul_li clearfix">
                    <li className="menu_item_has_child">
                      <a href="#!">Home</a>
                      <div className="mega_menu text-center">
                        <div
                          className="background"
                          data-bg-color="#ffffff"
                        ></div>
                      </div>
                    </li>
                    <li className="menu_item_has_child">
                      <a href="#!">Shop</a>
                    </li>

                    <li>
                      <a href="#!">About us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="col-lg-4">
                <div className="brand_logo">
                  <a className="brand_link" href="/">
                    <img
                      src="../assets/logo.png"
                      srcSet="../assets/logo.png 2x"
                      alt="logo_not_found"
                      style={{
                        height: "100px",
                      }}
                    />
                  </a>

                  <ul className="mh_action_btns ul_li clearfix">
                    <li>
                      <button
                        type="button"
                        className="search_btn"
                        data-toggle="collapse"
                        data-target="#search_body_collapse"
                        aria-expanded="false"
                        aria-controls="search_body_collapse"
                      >
                        <i className="fal fa-search"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-lg-4"
                // style={{ position: "relative", zIndex: 9999 }}
              >
                <ul className="action_btn_group ul_li_right clearfix">
                  <li>
                    <button
                      type="button"
                      className="search_btn"
                      data-toggle="collapse"
                      data-target="#search_body_collapse"
                      aria-expanded="false"
                      aria-controls="search_body_collapse"
                    >
                      <i className="fal fa-search"></i>
                    </button>
                  </li>
                  <li>
                    <div>
                      <button
                        type="button"
                        className="cart_btn"
                        onClick={toggleCartSidebar}
                      >
                        <i className="fal fa-shopping-cart"></i>
                        <span className="btn_badge" data-bg-color="#bf2626">
                          {cartItems.length}
                        </span>
                        {cartOpen && (
                          <CartSidebar
                            isOpen={cartOpen}
                            cartItems={cartItems}
                            onClose={closeCartSidebar}
                          />
                        )}
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          id="search_body_collapse"
          className="search_body_collapse collapse"
        >
          <div className="search_body">
            <div className="container-fluid prl_90">
              <form action="#">
                <div className="form_item mb-0">
                  <input
                    type="search"
                    name="search"
                    placeholder="Type here..."
                  />
                  <button type="submit">
                    <i className="fal fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header_section - end */}

      {/* <!-- sidebar mobile menu & sidebar cart - start */}
      <div class="sidebar-menu-wrapper">
        <div class="cart_sidebar">
          <button type="button" class="close_btn">
            <i class="fal fa-times"></i>
          </button>

          <ul class="cart_items_list ul_li_block mb_30 clearfix">
            <li>
              <div class="item_image">
                <img
                  src="assets/images/cart/img_01.jpg"
                  alt="image_not_found"
                />
              </div>
              <div class="item_content">
                <h4 class="item_title">Yellow Blouse</h4>
                <span class="item_price">$30.00</span>
              </div>
              <button type="button" class="remove_btn">
                <i class="fal fa-trash-alt"></i>
              </button>
            </li>
            <li>
              <div class="item_image">
                <img
                  src="assets/images/cart/img_01.jpg"
                  alt="image_not_found"
                />
              </div>
              <div class="item_content">
                <h4 class="item_title">Yellow Blouse</h4>
                <span class="item_price">$30.00</span>
              </div>
              <button type="button" class="remove_btn">
                <i class="fal fa-trash-alt"></i>
              </button>
            </li>
            <li>
              <div class="item_image">
                <img
                  src="assets/images/cart/img_01.jpg"
                  alt="image_not_found"
                />
              </div>
              <div class="item_content">
                <h4 class="item_title">Yellow Blouse</h4>
                <span class="item_price">$30.00</span>
              </div>
              <button type="button" class="remove_btn">
                <i class="fal fa-trash-alt"></i>
              </button>
            </li>
          </ul>

          <ul class="total_price ul_li_block mb_30 clearfix">
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

          <ul class="btns_group ul_li_block clearfix">
            <li>
              <a href="shop_cart.html">View Cart</a>
            </li>
            <li>
              <a href="shop_checkout.html">Checkout</a>
            </li>
          </ul>
        </div>

        <div class="sidebar_mobile_menu">
          <button type="button" class="close_btn">
            <i class="fal fa-times"></i>
          </button>

          <div class="msb_widget brand_logo text-center">
            <a href="index.html">
              <img
                src="assets/images/logo/logo_25_1x.png"
                srcset="assets/images/logo/logo_25_2x.png 2x"
                alt="logo_not_found"
              />
            </a>
          </div>

          <div class="msb_widget mobile_menu_list clearfix">
            <h3 class="title_text mb_15 text-uppercase">
              <i class="far fa-bars mr-2"></i> Menu List
            </h3>
            <ul class="ul_li_block clearfix">
              <li class="active dropdown">
                <a
                  href="#!"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul class="ul_li_block dropdown-menu">
                  <li>
                    <a href="home_carparts.html">Carparts</a>
                  </li>
                  <li>
                    <a href="home_classic_ecommerce.html">Classic Ecommerce</a>
                  </li>
                  <li>
                    <a href="home_creative_onelook.html">Creative Onelook</a>
                  </li>
                  <li>
                    <a href="home_electronic.html">Electronic</a>
                  </li>
                  <li>
                    <a href="home_fashion.html">Fashion</a>
                  </li>
                  <li>
                    <a href="home_fashion_minimal.html">Fashion Minimal</a>
                  </li>
                  <li>
                    <a href="home_furniture.html">Furniture</a>
                  </li>
                  <li>
                    <a href="home_gadget.html">Gadget</a>
                  </li>
                  <li>
                    <a href="home_lookbook_creative.html">Lookbook Creative</a>
                  </li>
                  <li>
                    <a href="home_lookbook_slide.html">Lookbook Slide</a>
                  </li>
                  <li>
                    <a href="home_medical.html">Medical</a>
                  </li>
                  <li>
                    <a href="home_modern.html">Modern</a>
                  </li>
                  <li>
                    <a href="home_modern_minimal.html">Modern Minimal</a>
                  </li>
                  <li>
                    <a href="home_motorcycle.html">Motorcycle</a>
                  </li>
                  <li>
                    <a href="home_parallax_shop.html">Parallax Shop</a>
                  </li>
                  <li>
                    <a href="home_simple_shop.html">Simple Shop</a>
                  </li>
                  <li>
                    <a href="home_single_story_black.html">
                      Single Story Black
                    </a>
                  </li>
                  <li>
                    <a href="home_single_story_white.html">
                      Single Story White
                    </a>
                  </li>
                  <li>
                    <a href="home_sports.html">Sports</a>
                  </li>
                  <li>
                    <a href="home_supermarket.html">Supermarket</a>
                  </li>
                  <li>
                    <a href="home_watch.html">Watch</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a
                  href="#!"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu">
                  <li class="dropdown ul_li_block">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Carparts
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="carparts_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="carparts_shop_grid.html">Shop Grid</a>
                      </li>
                      <li>
                        <a href="carparts_shop_list.html">Shop List</a>
                      </li>
                      <li>
                        <a href="carparts_shop_details.html">Shop Details</a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Classic Ecommerce
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="classic_ecommerce_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="classic_ecommerce_shop_details.html">
                          Shop Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Electronic
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="electronic_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="electronic_shop_details.html">Shop Details</a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Fashion
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="fashion_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="fashion_shop_details.html">Shop Details</a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Fashion Minimal
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="fashion_minimal_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="fashion_minimal_shop_details.html">
                          Shop Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Fashion Minimal
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="fashion_minimal_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="fashion_minimal_shop_details.html">
                          Shop Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Furniture
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="furniture_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="furniture_shop_details.html">Shop Details</a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Gadget
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="gadget_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="gadget_shop_details.html">Shop Details</a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Medical
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="medical_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="medical_shop_details.html">Shop Details</a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Modern Minimal
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="modern_minimal_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="modern_minimal_shop_details.html">
                          Shop Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Modern
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="modern_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="modern_shop_details.html">Shop Details</a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Motorcycle
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="motorcycle_shop_grid.html">Shop Grid</a>
                      </li>
                      <li>
                        <a href="motorcycle_shop_list.html">Shop List</a>
                      </li>
                      <li>
                        <a href="motorcycle_shop_details.html">Shop Details</a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Simple Shop
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="simple_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="simple_shop_details.html">Shop Details</a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sports
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="sports_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="sports_shop_details.html">Shop Details</a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Lookbook
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="lookbook_creative_shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="lookbook_creative_shop_details.html">
                          Shop Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop Other Pages
                    </a>
                    <ul class="dropdown-menu ul_li_block">
                      <li>
                        <a href="#!">
                          <del>Shop Page</del>
                        </a>
                      </li>
                      <li>
                        <a href="shop_details.html">Shop Details</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a
                  href="#!"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul class="dropdown-menu">
                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop Inner Pages
                    </a>
                    <ul class="dropdown-menu">
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
                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blogs
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="blog.html">Blog Page</a>
                      </li>
                      <li>
                        <a href="blog_details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Compare
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="compare_1.html">Compare V.1</a>
                      </li>
                      <li>
                        <a href="compare_2.html">Compare V.2</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a
                      href="#!"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Register
                    </a>
                    <ul class="dropdown-menu">
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
                <a href="/contact">Conatct</a>
              </li>
            </ul>
          </div>

          <div class="user_info">
            <h3 class="title_text mb_30 text-uppercase">
              <i class="fas fa-user mr-2"></i> User Info
            </h3>
            <div class="profile_info clearfix">
              <div class="user_thumbnail">
                <img
                  src="assets/images/meta/img_01.png"
                  alt="thumbnail_not_found"
                />
              </div>
              <div class="user_content">
                <h4 class="user_name">{name}</h4>
                <span class="user_title">Seller</span>
              </div>
            </div>
            <ul class="settings_options ul_li_block clearfix">
              <li>
                <a href="#!">
                  <i class="fal fa-user-circle"></i> Profile
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="fal fa-user-cog"></i> Settings
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="fal fa-sign-out-alt"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="overlay"></div>
      </div>
      {/* <!-- sidebar mobile menu & sidebar cart - end */}

      {/* <!-- fm_details_section - start */}
      <section
        class="fm_details_section sec_ptb_100 pb-0 clearfix"
        style={{ marginTop: "50px" }}
      >
        <div className="container mb_100">
          <div className="row align-items-center justify-content-lg-between">
            {/* Image Display Section */}
            <div className="col-lg-5">
              <div className="details_image">
                <div className="tab-content">
                  {productData.product_images?.map((image, index) => (
                    <div
                      key={`image-${index}`}
                      id={`di_tab_${image.id}`}
                      className={`tab-pane ${index === 0 ? "active" : "fade"}`}
                    >
                      <img
                        src={image}
                        alt={image.alt}
                        style={{ height: "500px" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Thumbnail and Action Buttons */}
            <div className="col-lg-2 order-first">
              <ul className="di_tab_nav ul_li" role="tablist">
                <li>
                  <a
                    className={productData.product_images === 0 ? "active" : ""}
                    data-toggle="tab"
                    href={`#di_tab_${productData.product_images}`}
                  >
                    <img
                      src={productData.product_img_thumbnail}
                      alt={productData.pproduct_title}
                    />
                  </a>
                </li>
              </ul>
              <div className="action_btns_group d-flex align-items-center">
                <a href="#!">
                  <i className="far fa-random"></i>
                </a>
                <a href="#!">
                  <i className="fal fa-heart"></i>
                </a>
                <a href="#!">
                  <i className="fal fa-share-alt"></i>
                </a>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="col-lg-5">
              <div className="details_content">
                <span className="item_type">{product.type}</span>
                <h2 className="item_title mb_15">
                  {productData.product_title}
                </h2>
                <span className="item_price mb_15">
                  <strong>${productData.price_amount}</strong>{" "}
                  {/* <del>${product.originalPrice.toFixed(2)}</del> */}
                </span>
                {/* <p className="mb-0">{productData.product_description}</p> */}
                <hr />

                {/* Color Options */}
                <div className="item_color_list mb_15 d-flex align-items-center clearfix">
                  <h4 className="list_title mb-0 text-uppercase">Color:</h4>
                  <ul className="ul_li clearfix">
                    {productData.product_variation?.color?.map((color) => (
                      <li key={color.id}>
                        <button type="button">
                          <span
                            style={{ backgroundColor: color.colorCode }}
                          ></span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Size Options */}
                <div className="item_size_list mb_30 d-flex align-items-center clearfix">
                  <h4 className="list_title mb-0 text-uppercase">Size:</h4>
                  <div className="option_select mb-0">
                    <select>
                      <option>Select A Option</option>
                      {productData.product_variation?.size?.map(
                        (size, index) => (
                          <option
                            key={index}
                            value={`${size.height}x${size.weight}`}
                          >
                            Height: {size.height}, Weight: {size.weight}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                {/* Quantity and Add to Cart Button */}
                <ul className="btns_group ul_li clearfix">
                  <li>
                    <div className="quantity_input">
                      <form action="#">
                        <span className="input_number_decrement">–</span>
                        <input
                          className="input_number"
                          type="text"
                          defaultValue={productData.quantity}
                        />
                        <span className="input_number_increment">+</span>
                      </form>
                    </div>
                  </li>
                  <li>
                    <a
                      className="custom_btn btn_sm bg_fashion2_red text-uppercase"
                      href="#!"
                    >
                      {/* <i className="fal fa-shopping-bag mr-2"></i> Add To Cart */}
                      <AddToCartButton
                        productId={productData.id}
                        quantity={productData.quantity}
                        user={user}
                        onProductAdded={(data) => {
                          console.log("Product added to cart:", data);
                        }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="fm_details_description">
          <div class="container">
            <ul class="nav ul_li_center mb_30" role="tablist">
              <li>
                <a class="active" data-toggle="tab" href="#description_tab">
                  DESCRIPTION
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#review_ta">
                  REVIEWS (2)
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#related_products_tab">
                  RELATED PRODUCTS
                </a>
              </li>
            </ul>
          </div>

          <div class="tab-content">
            <div id="description_tab" class="tab-pane active">
              <div class="container">
                <h5 class="mb_50 text-center">
                  {productData.product_description}
                </h5>
              </div>
              <div class="row mb_50 no-gutters">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="details_image">
                    <img
                      src="assets/images/details/simple_shop/img_01.jpg"
                      alt="image_not_found"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="details_image">
                    <img
                      src="assets/images/details/simple_shop/img_02.jpg"
                      alt="image_not_found"
                    />
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="table_wrap">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="assets/images/img_01.png"
                            alt="instructions"
                          />
                        </td>
                        <td>
                          <p class="mb-0">
                            Fusce vestibulum justo id varius tristique. Vivamus
                            purus odio, <br /> interdum id massa ullamcorper,
                            tempus.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Material:</strong>
                        </td>
                        <td>Cotton</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Weight:</strong>
                        </td>
                        <td>100 g</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Color:</strong>
                        </td>
                        <td>Beige, white, blue</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Sizes:</strong>
                        </td>
                        <td>44, 48, 50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div id="review_ta" class="tab-pane fade">
              <div class="container">
                <h5 class="mb_50 text-center">
                  Integer hendrerit a diam quis ullamcorper. Proin leo libero,
                  porttitor sit amet ullamcorper nec,vehicula sed enim. Nullam
                  et augue et eros pellentesque suscipit. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae. suscipit. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere
                </h5>
              </div>
              <div class="row mb_50 no-gutters">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="details_image">
                    <img
                      src="assets/images/details/simple_shop/img_01.jpg"
                      alt="image_not_found"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="details_image">
                    <img
                      src="assets/images/details/simple_shop/img_02.jpg"
                      alt="image_not_found"
                    />
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="table_wrap">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="assets/images/img_01.png"
                            alt="instructions"
                          />
                        </td>
                        <td>
                          <p class="mb-0">
                            Fusce vestibulum justo id varius tristique. Vivamus
                            purus odio, <br /> interdum id massa ullamcorper,
                            tempus.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Material:</strong>
                        </td>
                        <td>Cotton</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Weight:</strong>
                        </td>
                        <td>100 g</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Color:</strong>
                        </td>
                        <td>Beige, white, blue</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Sizes:</strong>
                        </td>
                        <td>44, 48, 50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div id="related_products_tab" class="tab-pane fade">
              <div class="container">
                <h5 class="mb_50 text-center">
                  Integer hendrerit a diam quis ullamcorper. Proin leo libero,
                  porttitor sit amet ullamcorper nec,vehicula sed enim. Nullam
                  et augue et eros pellentesque suscipit. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae. suscipit. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere
                </h5>
              </div>
              <div class="row mb_50 no-gutters">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="details_image">
                    <img
                      src="assets/images/details/simple_shop/img_01.jpg"
                      alt="image_not_found"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="details_image">
                    <img
                      src="assets/images/details/simple_shop/img_02.jpg"
                      alt="image_not_found"
                    />
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="table_wrap">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="assets/images/img_01.png"
                            alt="instructions"
                          />
                        </td>
                        <td>
                          <p class="mb-0">
                            Fusce vestibulum justo id varius tristique. Vivamus
                            purus odio, <br /> interdum id massa ullamcorper,
                            tempus.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Material:</strong>
                        </td>
                        <td>Cotton</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Weight:</strong>
                        </td>
                        <td>100 g</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Color:</strong>
                        </td>
                        <td>Beige, white, blue</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Sizes:</strong>
                        </td>
                        <td>44, 48, 50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- fm_details_section - end */}

      <Footer />
    </div>
  );
};

export default Details;
