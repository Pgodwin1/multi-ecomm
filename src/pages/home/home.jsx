import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import { base_url } from "../../api";
import CartSidebar from "../../compoent/cartSidebar";
import AddToCartButton from "../../compoent/cartItem";

function Home({ productItem }) {
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState({ featuresProduct: { rows: [] } });
  const [bestSeller, setBestSeller] = useState({ bestSelling: { rows: [] } });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({
    platform: "",
    deviceTYpe: "",
    ip: "",
    location: "",
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const [user, setUser] = useState(null);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      try {
        // Split the JWT and decode the payload
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser(payload); // Set the user data from the token payload
      } catch (error) {
        console.error("Invalid token format", error);
        // Optionally clear the invalid token
        localStorage.removeItem("token");
      }
    }
  }, []);

  useEffect(() => {
    const fetchAllCart = async () => {
      try {
        if (token) {
          // If user is logged in, fetch from the server
          const response = await axios.get(`${base_url}/cart/getAllCart`, {
            headers: {
              Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            },
          });
          if (response.status === 200) {
            const products = response.data.data.length;
            setCartCount(products || []);
    
            sessionStorage.setItem("allcart", JSON.stringify(products)); // Cache in sessionStorage
          } else {
            console.error("Failed to fetch cart items:", response.statusText);
          }
        } else {
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch cart items on component mount
    fetchAllCart();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${base_url}/product/get_all_category?page=0`
        );
        // Check the status directly
        if (response.status !== 200) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }

        const data = response.data;
        // console.log("data", data);

        if (data.status === 200 && data.data && data.data.rows) {
          setCategories(data.data.rows); // Update categories state
          setError(null);

          // Save category IDs to sessionStorage
          const categoryIds = data.data.rows.map((category) => category.id);
          sessionStorage.setItem("categoryIds", JSON.stringify(categoryIds));
        } else {
          throw new Error("Failed to retrieve categories");
        }
      } catch (error) {
        setError(error.message);
        setCategories([]); // Reset categories on error
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array to run only on mount

  const handleCategoryClick = (category) => {
    sessionStorage.setItem("selectedCategoryId", category.id);
    // navigate(`/category/${category.id}`);
  };

  const toggleCartSidebar = () => {
    //  setCartOpen((prev) => !prev); // Toggle the sidebar visibility
    setCartOpen(!cartOpen); // Toggle the sidebar visibility
  };

  const closeCartSidebar = () => {
    setCartOpen(false); // Close the sidebar
  };

  const handleCartCountUpdate = (count) => {
    setCartCount(count);
  };

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await axios.get(`${base_url}/product/dashboard`);
        if (response.status === 200) {
          const dashboard = response.data.data;
          setFeatured(dashboard || []);
          setBestSeller(dashboard || []);
          // console.log("dd", dashboard);
          sessionStorage.setItem("allProducts", JSON.stringify(products));
        }
        throw new Error(`An error occurred: ${response.statusText}`);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const onLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const settingsA = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable arrows
  };

  const settingsB = {
    arrows: false, // Disable arrows if not needed
    dots: false, // Disable dots if not needed
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // 3 seconds
    infinite: true, // Loop through slides infinitely
    speed: 500, // Animation speed
    fade: false, // Set to false to slide rather than fade
    cssEase: "linear",
  };

  // useEffect(() => {
  //   // Capture referrer information
  //   const platform = document.referrer ? document.referrer : "Direct Access";

  //   // Capture device and browser information
  //   const deviceType = getDeviceType();

  //   // Get IP address and location from a third-party API
  //   const fetchIPData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://ipinfo.io/json?token=75c0c37ff1a611"
  //       );
  //       const { ip, city, region, country } = response.data;
  //       const location = `${city}, ${region}, ${country}`;
  //       setUserData((prevData) => ({
  //         ...prevData,
  //         platform,
  //         deviceType,
  //         ip,
  //         location,
  //       }));

  //       // You can now send this data to your backend
  //       console.log({ platform, deviceType, ip, location });
  //     } catch (error) {
  //       console.error("Error fetching IP data:", error);
  //     }
  //   };

  //   fetchIPData();
  // }, []);
  return (
    <>
      <div className="home_supermarket">
        {/* <!-- backtotop - start --> */}
        <div id="thetop"></div>
        <div className="backtotop bg_supermarket_red">
          <a href="#" className="scroll">
            <i className="far fa-arrow-up"></i>
          </a>
        </div>
        {/* <!-- backtotop - end --> */}
        {/* <!-- preloader - start --> */}
        <div id="preloader"></div>
        {/* <!-- preloader - end --> */}
        {/* <!-- header_section - start

		================================================== --> */}
        <header
          className="header_section supermarket_header bg-white clearfix"
          style={{ height: "200px" }}
        >
          <div className="header_top text-white clearfix">
            <div className="container maxw_1460">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-5">
                  <p className="welcome_text mb-0">
                    Welcome to Worldwide Online marketplace Store
                  </p>
                </div>

                <div className="col-lg-7">
                  <ul className="info_list ul_li_right clearfix">
                    <li>
                      <a href="#!">
                        <i className="fal fa-map-marker-alt"></i> Store Locator
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fal fa-truck"></i> Track Your Order
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="header_middle clearfix" style={{ height: "80px" }}>
            <div className="container maxw_1460">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-3">
                  <div className="brand_logo">
                    <a className="brand_link" href="index.html">
                      <img
                        src="../assets/logo.png"
                        srcSet="../assets/logo.png 2x"
                        alt="logo_not_found"
                        style={{
                          height: "100px",
                          width: "200%",
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
                      <li>
                        <button type="button" className="cart_btn">
                          <i className="fal fa-shopping-cart"></i>
                          <span className="btn_badge">2</span>
                        </button>
                      </li>
                      <li>
                        <button type="button" className="mobile_menu_btn">
                          <i className="far fa-bars"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <form action="#">
                    <div className="medical_search_bar">
                      <div className="form_item">
                        <input
                          type="search"
                          name="search"
                          placeholder="search here..."
                          style={{ backgroundColor: "white" }}
                        />
                      </div>
                      <div className="option_select mb-0">
                        {/* <select>
											<option data-display="All Category">Select A Option</option>
											<option value="1">Some option</option>
											<option value="2">Another option</option>
											<option value="3" disabled>A disabled option</option>
											<option value="4">Potato</option>
										</select> */}
                      </div>
                      <button type="submit" className="submit_btn">
                        <i className="fal fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="col-lg-3">
                  <div className="supermarket_header_btn clearfix">
                    <ul className="action_btn_group ul_li_right clearfix">
                      {user ? (
                        <li>
                          <Link to="#" onClick={onLogout}>
                            Logout
                          </Link>
                        </li>
                      ) : (
                        <>
                          <li>
                            <Link to="/signup">Sign Up/Login</Link>
                          </li>
                        </>
                      )}
                      <li>
                        <Link to="#">Need help?</Link>
                      </li>
                      <li>
                        <Link to="/profile">Account</Link>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="cart_btn"
                          onClick={toggleCartSidebar}
                        >
                          <i className="fal fa-shopping-bag"></i>
                          <span className="btn_badge">{cartCount}</span>
                          {cartOpen && (
                            <CartSidebar
                              isOpen={cartOpen}
                              onClose={closeCartSidebar}
                              updateCartCount={handleCartCountUpdate}
                            />
                          )}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="header_bottom clearfix"
            style={{ marginTop: "-20px" }}
          >
            <div className="container maxw_1460">
              <nav className="main_menu clearfix">
                <ul className="ul_li clearfix">
                  <li>
                    <button
                      className="alldepartments_btn bg_supermarket_red text-uppercase"
                      type="button"
                      data-toggle="collapse"
                      // data-target="#alldepartments_dropdown"
                      aria-expanded="false"
                      // aria-controls="alldepartments_dropdown"
                    >
                      <i className="far fa-bars"></i> All Categories
                    </button>
                  </li>
                  <li className="menu_item_has_child">
                    <a href="#!">Home</a>
                  </li>
                  {/* <li className="menu_item_has_child">
                    <a href="#!">Shop</a>
                    <div className="mega_menu"></div>
                  </li> */}
                  <li>
                    <a href="/aboutus">About us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact us</a>
                  </li>
                </ul>
              </nav>
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
        {/* <!-- header_section - end
		================================================== --> */}

        {/* <!-- sidebar mobile menu & sidebar cart - start
			================================================== --> */}
        <div className="sidebar-menu-wrapper">
          <div className="sidebar_mobile_menu">
            <button type="button" className="close_btn">
              <i className="fal fa-times"></i>
            </button>

            <div className="msb_widget brand_logo text-center">
              <a href="index.html">
                <img
                  src="assets/images/logo/logo_25_1x.png"
                  alt="logo_not_found"
                />
              </a>
            </div>

            {/* <div className="msb_widget mobile_menu_list clearfix">
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
                  <ul className="ul_li_block dropdown-menu">
                    <li>
                      <a href="home_carparts.html">Carparts</a>
                    </li>
                    <li>
                      <a href="home_classic_ecommerce.html">
                        Classic Ecommerce
                      </a>
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
                      <a href="home_lookbook_creative.html">
                        Lookbook Creative
                      </a>
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
                <li className="dropdown">
                  <a
                    href="#!"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown ul_li_block">
                      <a
                        href="#!"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Carparts
                      </a>
                      <ul className="dropdown-menu ul_li_block">
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

                    <li className="dropdown">
                      <a
                        href="#!"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Classic Ecommerce
                      </a>
                      <ul className="dropdown-menu ul_li_block">
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

                    <li className="dropdown">
                      <a
                        href="#!"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Electronic
                      </a>
                      <ul className="dropdown-menu ul_li_block">
                        <li>
                          <a href="electronic_shop.html">Shop Page</a>
                        </li>
                        <li>
                          <a href="electronic_shop_details.html">
                            Shop Details
                          </a>
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
                        Fashion
                      </a>
                      <ul className="dropdown-menu ul_li_block">
                        <li>
                          <a href="fashion_shop.html">Shop Page</a>
                        </li>
                        <li>
                          <a href="fashion_shop_details.html">Shop Details</a>
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
                        Fashion Minimal
                      </a>
                      <ul className="dropdown-menu ul_li_block">
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

                    <li className="dropdown">
                      <a
                        href="#!"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Fashion Minimal
                      </a>
                      <ul className="dropdown-menu ul_li_block">
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

                    <li className="dropdown">
                      <a
                        href="#!"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Furniture
                      </a>
                      <ul className="dropdown-menu ul_li_block">
                        <li>
                          <a href="furniture_shop.html">Shop Page</a>
                        </li>
                        <li>
                          <a href="furniture_shop_details.html">Shop Details</a>
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
                        Gadget
                      </a>
                      <ul className="dropdown-menu ul_li_block">
                        <li>
                          <a href="gadget_shop.html">Shop Page</a>
                        </li>
                        <li>
                          <a href="gadget_shop_details.html">Shop Details</a>
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
                        Medical
                      </a>
                      <ul className="dropdown-menu ul_li_block">
                        <li>
                          <a href="medical_shop.html">Shop Page</a>
                        </li>
                        <li>
                          <a href="medical_shop_details.html">Shop Details</a>
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
                        Modern Minimal
                      </a>
                      <ul className="dropdown-menu ul_li_block">
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

                    <li className="dropdown">
                      <a
                        href="#!"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Modern
                      </a>
                      <ul className="dropdown-menu ul_li_block">
                        <li>
                          <a href="modern_shop.html">Shop Page</a>
                        </li>
                        <li>
                          <a href="modern_shop_details.html">Shop Details</a>
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
                        Motorcycle
                      </a>
                      <ul className="dropdown-menu ul_li_block">
                        <li>
                          <a href="motorcycle_shop_grid.html">Shop Grid</a>
                        </li>
                        <li>
                          <a href="motorcycle_shop_list.html">Shop List</a>
                        </li>
                        <li>
                          <a href="motorcycle_shop_details.html">
                            Shop Details
                          </a>
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
                        Simple Shop
                      </a>
                      <ul className="dropdown-menu ul_li_block">
                        <li>
                          <a href="simple_shop.html">Shop Page</a>
                        </li>
                        <li>
                          <a href="simple_shop_details.html">Shop Details</a>
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
                        Sports
                      </a>
                      <ul className="dropdown-menu ul_li_block">
                        <li>
                          <a href="sports_shop.html">Shop Page</a>
                        </li>
                        <li>
                          <a href="sports_shop_details.html">Shop Details</a>
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
                        Lookbook
                      </a>
                      <ul className="dropdown-menu ul_li_block">
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

                    <li className="dropdown">
                      <a
                        href="#!"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Shop Other Pages
                      </a>
                      <ul className="dropdown-menu ul_li_block">
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
                      <a
                        href="#!"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Register
                      </a>
                      <ul className="dropdown-menu">
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
            </div> */}

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
                  <h4 className="user_name">Jone Doe</h4>
                  <span className="user_title">Seller</span>
                </div>
              </div>
              <ul className="settings_options ul_li_block clearfix">
                <li>
                  <a href="#!">
                    <i className="fal fa-user-circle"></i> Profile
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fal fa-user-cog"></i> Settings
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fal fa-sign-out-alt"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="overlay"></div>
        </div>
        {/* <!-- sidebar mobile menu & sidebar cart - end
			================================================== --> */}

        {/* <!-- slider_section - start
			================================================== --> */}
        <section
          className="slider_section supermarket_slider sec_ptb_50 clearfix"
          data-background="assets/images/backgrounds/bg_13.jpg"
          // style={{ backgroundColor: "gainsboro" }}
        >
          <div className="container maxw_1430">
            <div className="row justify-content-lg-between">
              {/* Sidebar Section */}
              <div className="col-lg-3">
                <div
                  className="alldepartments_menu_wrap"
                  style={{ marginRight: "20px" }}
                >
                  <div
                    className="alldepartments_dropdown show_lg collapse"
                    id="alldepartments_dropdown"
                  >
                    <div className="card">
                      <ul className="alldepartments_menulist ul_li_block clearfix">
                        {categories.map((category) => (
                          <li
                            key={category.id}
                            className="has_child"
                            style={{ color: "black" }}
                          >
                            <Link
                              to={`/category/${category.id}`}
                              onClick={() => handleCategoryClick(category)}
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              {category.category_name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Slider Section */}
              <div
                className="col-lg-9"
                style={{
                  backgroundColor: "gainsboro",
                  height: "100%",
                  marginTop: "-25px",
                }}
              >
                <Slider {...settingsA} style={{ marginLeft: "30px" }}>
                  {featured.featuresProduct?.rows?.map((product, i) => (
                    <div
                      key={product.id || i}
                      className="item clearfix"
                      data-bg-color="#ffc156"
                    >
                      <div
                        className="slider_content_wrapper d-flex align-items-center"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {/* Text Content */}
                        <div className="slider_content" style={{ flex: 1 }}>
                          <h3 data-animation="fadeInUp" data-delay=".6s">
                            {product.product_title ||
                              "The Gift you are Wishing"}
                          </h3>
                          <div
                            className="item_price"
                            data-animation="fadeInUp"
                            data-delay=".8s"
                          >
                            {/* <small>From</small> */}
                            <sup>$</sup>
                            {product.price_amount
                              ? product.price_amount
                              : "749"}
                            {/* <sup>99</sup> */}
                          </div>
                          <div
                            className="abtn_wrap clearfix"
                            data-animation="fadeInUp"
                            data-delay="1s"
                          >
                            <a
                              href="#!"
                              className="custom_btn btn_round bg_supermarket_red"
                            >
                              Start Buying
                            </a>
                          </div>
                        </div>

                        {/* Image Content */}
                        <div
                          className="slider_image"
                          style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                          }}
                          data-animation="fadeInUp"
                          data-delay=".2s"
                        >
                          <img
                            src={
                              product.product_img_thumbnail ||
                              "assets/images/slider/supermarket/img_01.png"
                            }
                            alt={product.product_tittle || "image_not_found"}
                            style={{
                              width: "150%", // Increase percentage as needed
                              maxWidth: "500px", // Set a max width for larger screens
                              height: "auto",
                              marginLeft: "150px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- slider_section - end
			================================================== --> */}

        {/* <!-- policy_section - start
			================================================== --> */}
        <section className="policy_section sec_ptb_50 pb-0 clearfix">
          <div className="container maxw_1460">
            <div className="supermarket_policy clearfix">
              <ul className="ul_li clearfix">
                <li>
                  <div className="supermarket_policy_item clearfix">
                    <div className="item_icon">
                      <img
                        src="assets/images/icons/supermarket/icon_12.png"
                        alt="icon_not_found"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="text-uppercase">Free Delivery</h3>
                      <p>For all order over $120</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="supermarket_policy_item clearfix">
                    <div className="item_icon">
                      <img
                        src="assets/images/icons/supermarket/icon_13.png"
                        alt="icon_not_found"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="text-uppercase">Safe payment</h3>
                      <p>100% secure payment</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="supermarket_policy_item clearfix">
                    <div className="item_icon">
                      <img
                        src="assets/images/icons/supermarket/icon_14.png"
                        alt="icon_not_found"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="text-uppercase">Shop with confidence</h3>
                      <p>If goods have problems</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="supermarket_policy_item clearfix">
                    <div className="item_icon">
                      <img
                        src="assets/images/icons/supermarket/icon_15.png"
                        alt="icon_not_found"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="text-uppercase">24/7 help center</h3>
                      <p>Dedicated 24/7 support</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="supermarket_policy_item clearfix">
                    <div className="item_icon">
                      <img
                        src="assets/images/icons/supermarket/icon_16.png"
                        alt="icon_not_found"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="text-uppercase">Friendly services</h3>
                      <p>30 day satisfaction guarantee</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- policy_section - end
			================================================== --> */}

        {/* <!-- deals_section - start
			================================================== --> */}
        <section className="deals_section sec_ptb_50 clearfix">
          <div className="container maxw_1460">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="supermarket_section_title clearfix">
                  <h2 className="title_text mb-0" style={{ fontSize: "30px" }}>
                    Featured Categories
                  </h2>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="gray_line"></div>
              </div>

              <div className="col-lg-2">
                <div className="carousel_nav align_right">
                  <button type="button" className="left_arrow5">
                    <i className="fal fa-arrow-left"></i>
                  </button>
                  <button type="button" className="right_arrow5">
                    <i className="fal fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="supermarket_deals_carousel position-relative clearfix">
              <div
                className="slideshow5_slider row clearfix"
                data-slick='{"dots": false}'
              >
                {featured.featuresProduct?.rows?.map((product) => (
                  <div className="item col" key={product.id}>
                    <div className="supermarket_deals_item text-center clearfix">
                      {/* Display thumbnail */}
                      <a href="#!" className="item_image">
                        <img
                          src={product.product_img_thumbnail}
                          alt={`${product.product_title} thumbnail`}
                          style={{
                            height: "200px", // Adjusted height to fit the layout
                            objectFit: "cover",
                            borderRadius: "15px",
                          }}
                        />
                      </a>
                      <div className="item_content">
                        {/* Display title */}
                        <h3 className="item_title">
                          <a href="#!">{product.product_title}</a>
                        </h3>
                      </div>
                      {/* Display quantity */}
                      <span className="item_instock">
                        {product.quantity} Products
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* deals_section - end */}

        {/* bestseller */}
        <div className="tab-content" style={{ marginTop: "20px" }}>
          <div id="top_tab" className="tab-pane active">
            <div className="row mb_50 align-items-center justify-content-lg-between">
              <div className="col-lg-5">
                <div className="supermarket_section_title clearfix">
                  <h2 className="title_text mb-0">Bestseller Products</h2>
                </div>
              </div>

              {/* <div className="col-lg-7">
                <ul
                  className="supermarket_tab_nav ul_li_right nav clearfix"
                  role="tablist"
                >
                  <li>
                    <a className="active" data-toggle="tab" href="#top_tab">
                      Top 20
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#phones_tablets_tab">
                      Phones & Tablets
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#laptops_computers_tab">
                      Laptops & Computers
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#video_cameras_tab">
                      Video Cameras
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>

            <ul className="supermarket_product_columns has_3columns ul_li bg_white clearfix">
              {bestSeller.bestSelling?.rows?.map((product) => (
                <li
                  key={product.id}
                  style={{ flex: "1 1 30%", margin: "10px" }}
                >
                  <div
                    className="supermarket_product_listlayout"
                    style={{ display: "flex" }}
                  >
                    {/* Image Section */}
                    <div
                      className=" item_image"
                      style={{ flex: "0 0 40%", marginRight: "10px" }}
                    >
                      <Link to={`/detail/${product.id}`}>
                        <img
                          src={product.product_img_thumbnail}
                          alt={product.product_title}
                          style={{ width: "100%" }}
                        />
                      </Link>
                    </div>
                    {/* Content Section */}
                    <div className="item_content" style={{ flex: "1" }}>
                      <div className="rating_star_wrap d-flex align-items-center clearfix">
                        <ul className="rating_star ul_li mr-2 clearfix"></ul>
                      </div>
                      <h3 className="item_title">
                        <a href={`/detail/${product.id}`}>
                          {product.product_title}
                        </a>
                      </h3>
                      <ul className=" ul_li" style={{ gap: 2 }}>
                        <li>
                          <a
                            className="addtocar_btn"
                            data-placement="top"
                            title="Add To Cart"
                            onClick={(e) => e.preventDefault()}
                          >
                            <AddToCartButton
                              productId={product.id}
                              user={user}
                              onProductAdded={(data) => {
                                console.log("Product added to cart:", data);
                              }}
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            className="tooltips"
                            data-placement="top"
                            title="Add To Wishlist"
                            href="#!"
                          >
                            <i className="fal fa-heart"></i>
                          </a>
                        </li>
                      </ul>
                      <ul className="info_list ul_li_block clearfix">
                        <li>
                          <div className="item_content"></div>
                        </li>
                        <li>
                          <div className="item_content"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* enfd here */}

        {/* //supermarket_feature_carousel - start */}
        <section
          id="supermarketFeatureCarousel"
          className="supermarket_feature_carousel arrow_ycenter clearfix"
          style={{ backgroundColor: "#060314" }}
        >
          <Slider {...settingsB}>
            {bestSeller.bestSelling?.rows?.map((item) => (
              <div
                key={item.id}
                className="item sec_ptb_50 d-flex align-items-center"
              >
                <div className="container maxw_1460">
                  <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-7 order-last">
                      <div className="item_image">
                        <img
                          src={item.product_img_thumbnail}
                          alt={item.product_title}
                          style={{ maxWidth: "50%", height: "auto" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="item_content">
                        <span className="item_price">{item.product_price}</span>
                        <h4 className="sub_title text-white">
                          {item.product_title}
                        </h4>
                        <h3 className="item_title text-white mb_30">
                          {item.product_title}
                        </h3>
                        <a
                          className="custom_btn btn_round bg_electronic_blue"
                          href="#!"
                        >
                          Start Buying
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
        {/* <!-- supermarket_feature_carousel - end
			================================================== --> */}

        <footer
          className="footer_section supermarket_footer clearfix"
          style={{ backgroundColor: "black" }}
        >
          <div className="footer_widget_area sec_ptb_100 bg_white clearfix">
            <div className="container">
              <div className="row justify-content-lg-between">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div className="footer_widget footer_useful_links clearfix">
                    <h3 className="footer_widget_title">Buyer Central</h3>
                    <ul className="ul_li_block clearfix">
                      <li>
                        <a href="/login">Sign in</a>
                      </li>
                      <li>
                        <a href="#!">Buyer Protection</a>
                      </li>
                      <li>
                        <a href="#!">Payment Options</a>
                      </li>
                      <li>
                        <a href="#!">Shipping Policy</a>
                      </li>
                      <li>
                        <a href="#!">Return Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div className="footer_widget bestrated_products">
                    <h3 className="footer_widget_title">Best Rated Products</h3>

                    <div className="supermarket_product_small">
                      <span className="item_type">Speakers</span>
                      <h3 className="item_title">
                        <a href="#!">Red Wireless Headphone Solo 2 HD</a>
                      </h3>
                      <span className="item_price">£2,300</span>
                      <ul className="rating_star ul_li clearfix">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fal fa-star"></i>
                        </li>
                      </ul>
                    </div>

                    <div className="supermarket_product_small">
                      <span className="item_type">Speakers</span>
                      <h3 className="item_title">
                        <a href="#!">Red Wireless Headphone Solo 2 HD</a>
                      </h3>
                      <span className="item_price">£2,300</span>
                      <ul className="rating_star ul_li clearfix">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fal fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div className="footer_widget footer_useful_links clearfix">
                    <h3 className="footer_widget_title">Information</h3>
                    <ul className="ul_li_block clearfix">
                      <li>
                        <a href="#!">About Us</a>
                      </li>
                      <li>
                        <a href="#!">Band of Trust</a>
                      </li>
                      <li>
                        <a href="#!">Market History</a>
                      </li>
                      <li>
                        <a href="#!">News</a>
                      </li>
                      <li>
                        <a href="#!">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div className="footer_widget supermarket_footer_contact">
                    <h3 className="footer_widget_title">Contact info</h3>
                    <ul className="ul_li_block clearfix">
                      <li>
                        <div className="item_icon">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="item_content">
                          <p className="mb-0">
                            1789 Street Name, City Name, United States
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="item_icon">
                          <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="item_content">
                          <p className="mb-0">0092 - 123 455 789</p>
                          <p className="mb-0">+123 958 789</p>
                        </div>
                      </li>
                      <li>
                        <div className="item_icon">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div className="item_content">
                          <p className="mb-0">Email: support@uxnaqvi.com</p>
                          <p className="mb-0">9AM-5PM, Mon - Sat, GMT+3</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="footer_middle sec_ptb_50 text-white clearfix"
            data-bg-color="#23292d"
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-5 col-md-7 col-sm-9 col-xs-12">
                  <div className="form_item mb-0">
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        style={{ backgroundColor: "white" }}
                      />
                      <button
                        type="submit"
                        className="submit_btn"
                        style={{ backgroundColor: "gray" }}
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>

                <div className="col-lg-3 col-md-7 col-sm-9 col-xs-12">
                  <div className="footer_electronic_hotline mb_30">
                    <i className="fal fa-headset"></i>
                    <h4 className="text-white">GOT QUESTION? CALL US 24/7!</h4>
                    <span>801 017 197</span>
                  </div>
                </div>

                <div className="col-lg-4 col-md-7 col-sm-9 col-xs-12">
                  <ul className="circle_social_links ul_li_right clearfix">
                    <li>
                      <a href="#!">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="footer_bottom text-white clearfix"
            data-bg-color="#191e22"
          >
            <div className="container">
              <div className="row justify-content-lg-between">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <p className="copyright_text mb-0">
                    ©{" "}
                    <a href="#!" className="author_link text-white">
                      jthemes
                    </a>{" "}
                    - All rights Reserved
                  </p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="payment_methods float-lg-right float-md-right">
                    <img
                      src="assets/images/payment_methods_01.png"
                      alt="image_not_found"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
