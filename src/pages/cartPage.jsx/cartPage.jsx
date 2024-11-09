import React, { useEffect, useState } from "react";
import { base_url } from "../../api";
import axios from "axios";

const CartPage = () => {
  const [allCart, setAllcart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCart = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token

        if (!token) {
          throw new Error("No token found, user is not authenticated.");
        }

        const response = await axios.get(`${base_url}/cart/getAllCart`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });

        console.log("cart", response);
        if (response.status === 200) {
          const products = response.data.data;
          setAllcart(response.data.data || []);
          sessionStorage.setItem("allcart", JSON.stringify(products));
        }
        throw new Error(`An error occurred: ${response.statusText}`);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllCart();
    // Check if the user is logged in
    const isLoggedIn = Boolean(localStorage.getItem("token")); // Or however you check login status

    if (isLoggedIn) {
      // If logged in, try to load `allcart` from sessionStorage
      const savedCart = sessionStorage.getItem("allcart");
      if (savedCart) {
        setAllcart(JSON.parse(savedCart));
        setLoading(false);
      } else {
        // Fetch cart from the server if not in sessionStorage
        fetchAllCart();
      }
    } else {
      // If not logged in, load from `guestCart` in sessionStorage
      const guestCart = sessionStorage.getItem("allcart");
      if (guestCart) {
        setAllcart(JSON.parse(guestCart));
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  }, []);

  const cartItems = [
    {
      id: 1,
      name: "Men's Polo T-shirt",
      type: "Clothes",
      price: 69.0,
      quantity: 2,
      totalPrice: 138.0,
      image: "assets/images/cart/img_04.jpg",
    },
    {
      id: 2,
      name: "Women's Hoodie",
      type: "Clothes",
      price: 49.0,
      quantity: 1,
      totalPrice: 49.0,
      image: "assets/images/cart/img_05.jpg",
    },
  ];

  return (
    <>
      {/* <!-- backtotop - start --> */}
      <div id="thetop"></div>
      <div class="backtotop bg_default_red">
        <a href="#" class="scroll">
          <i class="far fa-arrow-up"></i>
        </a>
      </div>
      {/* <!-- backtotop - end --> */}

      {/* <!-- preloader - start --> */}
      <div id="preloader"></div>
      {/* <!-- preloader - end --> */}
      <header class="header_section simple_shop_header sticky_header clearfix">
        <div class="header_content_wrap d-flex align-items-center">
          <div class="container maxw_1480">
            <div class="row align-items-center justify-content-lg-between">
              <div class="col-lg-4">
                <nav class="main_menu clearfix">
                  <ul class="ul_li clearfix">
                    <li class="menu_item_has_child">
                      <a href="#!">Home</a>
                      <div class="mega_menu text-center">
                        <div class="background" data-bg-color="#ffffff">
                          <div class="container">
                            <ul class="home_pages ul_li clearfix">
                              <li>
                                <a href="home_carparts.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/carparts.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Car Parts</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_classic_ecommerce.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/classic_ecommarce.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">
                                    Classic Ecommerce
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="home_creative_onelook.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/creative_onelook.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">
                                    Creative Onelook
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="home_electronic.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/electronic.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Electronic</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_fashion.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/fashion.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Fashion</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_fashion_minimal.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/fashion_minimal.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">
                                    Fashion Minimal
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="home_furniture.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/furniture.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Furniture</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_gadget.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/gadget.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Gadget</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_lookbook_creative.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/lookbook_creative.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">
                                    Lookbook Creative
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="home_lookbook_slide.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/lookbook_slide.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Lookbook Slide</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_medical.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/medical.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Medical</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_modern.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/modern.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Modern</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_modern_minimal.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/modern_minimal.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Modern Minimal</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_motorcycle.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/motorcycle.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Motorcycle</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_parallax_shop.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/parallax_shop.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Parallax Shop</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_simple_shop.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/simple_shop.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Simple Shop</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_single_story_black.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/single_story_black.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">
                                    Single Story Black
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="home_single_story_white.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/single_story_white.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">
                                    Single Story White
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="home_sports.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/sports.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Sports Shop</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_supermarket.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/supermarket.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Supermarket</span>
                                </a>
                              </li>
                              <li>
                                <a href="home_watch.html">
                                  <span class="item_image">
                                    <img
                                      src="assets/images/home_pages/watch.png"
                                      alt="image_not_found"
                                    />
                                  </span>
                                  <span class="item_title">Watch</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="menu_item_has_child">
                      <a href="#!">Shop</a>
                      <div class="mega_menu">
                        <div class="background" data-bg-color="#ffffff">
                          <div class="container">
                            <div class="row mt__30">
                              <div class="col-lg-3">
                                <div class="page_links">
                                  <h3 class="title_text">Carparts</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="carparts_shop.html">Shop Page</a>
                                    </li>
                                    <li>
                                      <a href="carparts_shop_grid.html">
                                        Shop Grid
                                      </a>
                                    </li>
                                    <li>
                                      <a href="carparts_shop_list.html">
                                        Shop List
                                      </a>
                                    </li>
                                    <li>
                                      <a href="carparts_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="page_links">
                                  <h3 class="title_text">Classic Ecommerce</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="classic_ecommerce_shop.html">
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href="classic_ecommerce_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="page_links">
                                  <h3 class="title_text">Electronic</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="electronic_shop.html">
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href="electronic_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="page_links">
                                  <h3 class="title_text">Fashion</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="fashion_shop.html">Shop Page</a>
                                    </li>
                                    <li>
                                      <a href="fashion_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div class="col-lg-3">
                                <div class="page_links">
                                  <h3 class="title_text">Fashion Minimal</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="fashion_minimal_shop.html">
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href="fashion_minimal_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="page_links">
                                  <h3 class="title_text">Fashion Minimal</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="fashion_minimal_shop.html">
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href="fashion_minimal_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="page_links">
                                  <h3 class="title_text">Furniture</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="furniture_shop.html">
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href="furniture_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="page_links">
                                  <h3 class="title_text">Gadget</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="gadget_shop.html">Shop Page</a>
                                    </li>
                                    <li>
                                      <a href="gadget_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div class="col-lg-3">
                                <div class="page_links">
                                  <h3 class="title_text">Medical</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="medical_shop.html">Shop Page</a>
                                    </li>
                                    <li>
                                      <a href="medical_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="page_links">
                                  <h3 class="title_text">Modern Minimal</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="modern_minimal_shop.html">
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href="modern_minimal_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="page_links">
                                  <h3 class="title_text">Modern</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="modern_shop.html">Shop Page</a>
                                    </li>
                                    <li>
                                      <a href="modern_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="page_links">
                                  <h3 class="title_text">Motorcycle</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="motorcycle_shop_grid.html">
                                        Shop Grid
                                      </a>
                                    </li>
                                    <li>
                                      <a href="motorcycle_shop_list.html">
                                        Shop List
                                      </a>
                                    </li>
                                    <li>
                                      <a href="motorcycle_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div class="col-lg-3">
                                <div class="page_links">
                                  <h3 class="title_text">Simple Shop</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="simple_shop.html">Shop Page</a>
                                    </li>
                                    <li>
                                      <a href="simple_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="page_links">
                                  <h3 class="title_text">Sports</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="sports_shop.html">Shop Page</a>
                                    </li>
                                    <li>
                                      <a href="sports_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="page_links">
                                  <h3 class="title_text">Lookbook</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="lookbook_creative_shop.html">
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href="lookbook_creative_shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="page_links">
                                  <h3 class="title_text">Shop Other Pages</h3>
                                  <ul class="ul_li_block">
                                    <li>
                                      <a href="#!">
                                        <del>Shop Page</del>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop_details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="menu_item_has_child">
                      <a href="#!">Pages</a>
                      <ul class="submenu">
                        <li class="menu_item_has_child">
                          <a href="#!">Shop Inner Pages</a>
                          <ul class="submenu">
                            <li>
                              <a href="shop_cart.html">Shopping Cart</a>
                            </li>
                            <li>
                              <a href="shop_checkout.html">Checkout Step 1</a>
                            </li>
                            <li>
                              <a href="shop_checkout_step2.html">
                                Checkout Step 2
                              </a>
                            </li>
                            <li>
                              <a href="shop_checkout_step3.html">
                                Checkout Step 3
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="404.html">404 Page</a>
                        </li>
                        <li class="menu_item_has_child">
                          <a href="#!">Blogs</a>
                          <ul class="submenu">
                            <li>
                              <a href="blog.html">Blog Page</a>
                            </li>
                            <li>
                              <a href="blog_details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu_item_has_child">
                          <a href="#!">Compare</a>
                          <ul class="submenu">
                            <li>
                              <a href="compare_1.html">Compare V.1</a>
                            </li>
                            <li>
                              <a href="compare_2.html">Compare V.2</a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu_item_has_child">
                          <a href="#!">Register</a>
                          <ul class="submenu">
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="signup.html">Sign Up</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
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

              <div class="col-lg-4">
                <div class="brand_logo">
                  <a class="brand_link" href="/">
                    <img
                      src="../assets/logo.png"
                      srcSet="../assets/logo.png 2x"
                      alt="logo_not_found"
                      style={{
                        height: "100px",
                      }}
                    />
                  </a>

                  <ul class="mh_action_btns ul_li clearfix">
                    <li>
                      {/* <button
                        type="button"
                        class="search_btn"
                        data-toggle="collapse"
                        data-target="#search_body_collapse"
                        aria-expanded="false"
                        aria-controls="search_body_collapse"
                      >
                        <i class="fal fa-search"></i>
                      </button> */}
                    </li>
                    <li>
                      {/* <button type="button" class="cart_btn">
                        <i class="fal fa-shopping-cart"></i>
                        <span class="btn_badge">2</span>
                      </button> */}
                    </li>
                    <li>
                      <button type="button" class="mobile_menu_btn">
                        <i class="far fa-bars"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-4">
                <ul class="action_btns_group ul_li_right clearfix">
                  <li>
                    {/* <button
                      type="button"
                      class="search_btn"
                      data-toggle="collapse"
                      data-target="#search_body_collapse"
                      aria-expanded="false"
                      aria-controls="search_body_collapse"
                    >
                      <i class="fal fa-search"></i>
                    </button> */}
                  </li>
                  <li>
                    <button type="button" class="wishlist_btn">
                      <i class="fal fa-heart"></i>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="compair_btn">
                      <i class="far fa-random"></i>
                    </button>
                  </li>
                  <li>
                    {/* <button type="button" class="cart_btn">
                      <i class="fal fa-shopping-cart"></i>
                      <span class="btn_badge" data-bg-color="#bf2626">
                        2
                      </span>
                    </button> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="search_body_collapse" class="search_body_collapse collapse">
          <div class="search_body">
            <div class="container-fluid prl_90">
              {/* <form action="#">
                <div class="form_item mb-0">
                  <input
                    type="search"
                    name="search"
                    placeholder="Type here..."
                  />
                  <button type="submit">
                    <i class="fal fa-search"></i>
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </header>
      {/* header_section - end */}
      {/* ================================================== */}

      {/* sidebar mobile menu & sidebar cart - start */}
      {/* ================================================== */}
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
                srcSet="assets/images/logo/logo_25_2x.png 2x"
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
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="signup.html">Sign Up</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Conatct</a>
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
                <h4 class="user_name">Jone Doe</h4>
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
      {/* sidebar mobile menu & sidebar cart - end */}
      {/* ================================================== */}

      {/* cart_section - start */}
      {/* ================================================== */}
      <section class="cart_section sec_ptb_140 clearfix">
        <div class="container">
          <div class="cart_table mb_50">
            <table class="table">
              <thead class="text-uppercase">
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {allCart &&
                  allCart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="cart_product">
                          <div className="item_image">
                            <img
                              src={item.product_img_thumbnail}
                              alt="image_not_found"
                            />
                          </div>
                          <div className="item_content">
                            <h4 className="item_title">{item.product_title}</h4>
                            <span className="item_type">{item.type}</span>
                          </div>
                          <button type="button" className="remove_btn">
                            <i className="fal fa-times"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <span className="price_text">${item.price_amount}</span>
                      </td>
                      <td>
                        <div className="quantity_input">
                          <form action="#">
                            <span className="input_number_decrement">–</span>
                            <input
                              className="input_number"
                              type="text"
                              value={item.quantity}
                            />
                            <span className="input_number_increment">+</span>
                          </form>
                        </div>
                      </td>
                      <td>
                        <span className="total_price">
                          ${item.actual_total}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div class="coupon_wrap mb_50">
            <div class="row justify-content-lg-between">
              <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                <div class="coupon_form">
                  <div class="form_item mb-0">
                    <input
                      type="text"
                      class="coupon"
                      placeholder="Coupon Code"
                    />
                  </div>
                  <button
                    type="submit"
                    class="custom_btn bg_danger text-uppercase"
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>

              <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                <div class="cart_update_btn">
                  <button
                    type="button"
                    class="custom_btn bg_secondary text-uppercase"
                  >
                    Update Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-lg-end">
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div
                class="cart_pricing_table pt-0 text-uppercase"
                data-bg-color="#f2f3f5"
              >
                <h3 class="table_title text-center" data-bg-color="#ededed">
                  Cart Total
                </h3>
                <ul class="ul_li_block clearfix">
                  <li>
                    <span>Subtotal</span>{" "}
                    <span>${allCart.map((item) => item.actual_total)}</span>
                  </li>
                  <li>
                    <span>Total</span>{" "}
                    <span>{allCart.map((item) => item.actual_total)}</span>
                  </li>
                </ul>
                <a href="shop_checkout.html" class="custom_btn bg_success">
                  Proceed to Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cart_section - end */}
      {/* ================================================== */}

      {/* footer_section - start */}
      {/* ==================================================  */}
      <footer
        class="footer_section default_footer clearfix"
        style={{ backgroundColor: "black" }}
      >
        <div
          class="footer_widget_area sec_ptb_100 clearfix"
          data-bg-color="#1f1f1f"
        >
          <div class="container">
            <div class="row justify-content-lg-between">
              <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div class="footer_widget df_about_area">
                  <div class="brand_logo mb_30">
                    <a href="index.html">
                      <img
                        src="assets/images/logo/logo_28_1x.png"
                        srcSet="assets/images/logo/logo_28_2x.png 2x"
                        alt="logo_not_found"
                      />
                    </a>
                  </div>

                  <p class="mb_15">
                    We’ve completed 1000+ demo site for more than one million of
                    our customers.
                  </p>

                  <ul class="df_contact_info ul_li_block clearfix">
                    <li>
                      <i class="fas fa-phone-alt"></i> 001-6688-9999
                    </li>
                    <li>
                      <i class="fas fa-envelope"></i> contact@site.com
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div class="footer_widget product_list clearfix">
                  <h3 class="df_widget_title text-white text-uppercase">
                    Hot Products
                  </h3>
                  <ul class="ul_li_block">
                    <li>
                      <div class="small_product">
                        <div class="item_image">
                          <img
                            src="assets/images/shop/minimal/img_10.jpg"
                            alt="image_not_found"
                          />
                        </div>
                        <div class="item_content">
                          <h3 class="item_title">
                            <a class="text-white" href="#!">
                              Lobortis Laculis ut Condimentum
                            </a>
                          </h3>
                          <span class="item_price">$110.00</span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="small_product">
                        <div class="item_image">
                          <img
                            src="assets/images/shop/minimal/img_11.jpg"
                            alt="image_not_found"
                          />
                        </div>
                        <div class="item_content">
                          <h3 class="item_title">
                            <a class="text-white" href="#!">
                              Lobortis Laculis ut Condimentum
                            </a>
                          </h3>
                          <span class="item_price">$110.00</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div class="footer_widget product_list clearfix">
                  <h3 class="df_widget_title text-white text-uppercase">
                    Sale Products
                  </h3>
                  <ul class="ul_li_block">
                    <li>
                      <div class="small_product">
                        <div class="item_image">
                          <img
                            src="assets/images/shop/minimal/img_12.jpg"
                            alt="image_not_found"
                          />
                        </div>
                        <div class="item_content">
                          <h3 class="item_title">
                            <a class="text-white" href="#!">
                              Lobortis Laculis ut Condimentum
                            </a>
                          </h3>
                          <span class="item_price">$110.00</span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="small_product">
                        <div class="item_image">
                          <img
                            src="assets/images/shop/minimal/img_13.jpg"
                            alt="image_not_found"
                          />
                        </div>
                        <div class="item_content">
                          <h3 class="item_title">
                            <a class="text-white" href="#!">
                              Lobortis Laculis ut Condimentum
                            </a>
                          </h3>
                          <span class="item_price">$110.00</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div class="footer_widget df_newsletter">
                  <h3 class="df_widget_title text-white text-uppercase">
                    Newsletter
                  </h3>
                  <p class="mb_30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ex tortor
                  </p>
                  <form action="#">
                    <div class="form_item mb-0">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                      <button type="submit" class="submit_btn">
                        <i class="fal fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer_bottom clearfix" data-bg-color="#1a1a1a">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p class="copyright_text mb-0">
                  @2020 Designed By{" "}
                  <a href="#!" class="author_link text-white">
                    jthemes
                  </a>
                  .
                </p>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <ul class="circle_social_links ul_li_right clearfix">
                  <li>
                    <a href="#!">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fab fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer_section - end */}
      {/* ==================================================  */}
    </>
  );
};

export default CartPage;
