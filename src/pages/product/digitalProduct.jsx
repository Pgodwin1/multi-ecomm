import React from 'react'
import { Link } from 'react-router-dom';

function DigitalProduct() {
  return (
    <div>
      {/* <!-- header_section - start */}
      <header class="header_section electronic_header clearfix">
        <div class="header_advertisement">
          <img
            src="https://www.smartinsights.com/wp-content/uploads/2015/02/Product-Ad-Gif-example.gif"
            alt="image_not_found"
            style={{ width: "200%", height: "70px", objectFit: "cover" }}
          />
        </div>
        <div class="header_top clearfix">
          <div class="container maxw_1600">
            <div class="row align-items-center">
              <div class="col-lg-3">
                <div class="brand_logo">
                  <a class="brand_link" href="/">
                    <img
                      src="assets/logo.png"
                      srcset="assets/logo.png"
                      alt="logo_not_found"
                      style={{ height: "20vh", width: "200%" }}
                    />
                  </a>

                  <ul class="mh_action_btns ul_li clearfix">
                    <li>
                      <button
                        type="button"
                        class="search_btn"
                        data-toggle="collapse"
                        data-target="#search_body_collapse"
                        aria-expanded="false"
                        aria-controls="search_body_collapse"
                      >
                        <i class="fal fa-search"></i>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="cart_btn">
                        <i class="fal fa-shopping-cart"></i>
                        <span class="btn_badge">2</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="mobile_menu_btn">
                        <i class="far fa-bars"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-6">
                <form action="#">
                  <div class="medical_search_bar">
                    <div class="form_item">
                      <input
                        type="search"
                        name="search"
                        placeholder="search here..."
                      />
                    </div>
                    <div class="option_select">
                      <select>
                        <option data-display="All Category">
                          Select A Option
                        </option>
                        <option value="1">Some option</option>
                        <option value="2">Another option</option>
                        <option value="3" disabled>
                          A disabled option
                        </option>
                        <option value="4">Potato</option>
                      </select>
                    </div>
                    <button type="submit" class="submit_btn">
                      <i class="fal fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>

              <div class="col-lg-3">
                <ul class="electronic_action_btns ul_li_right clearfix">
                  <li>
                    <a href="/login">
                      <i class="fas fa-user"></i>
                      <span>Login</span>
                    </a>
                  </li>
                  <li>
                    <a href="shop_cart.html">
                      <i class="fas fa-heart"></i>
                      <span>Wishlist</span>
                    </a>
                  </li>
                  <li>
                    <button type="button" class="cart_btn">
                      <span class="counter">2</span>
                      <i class="fas fa-shopping-cart"></i>
                      <span>Cart</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="search_body_collapse" class="search_body_collapse collapse">
          <div class="search_body">
            <div class="container-fluid prl_90">
              <form action="#">
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
              </form>
            </div>
          </div>
        </div>

        <div class="header_bottom clearfix">
          <div class="container maxw_1600">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <nav class="main_menu clearfix">
                  <ul class="ul_li text-uppercase clearfix">
                    <li>
                      <a href="#!">Super deals</a>
                    </li>
                    <li>
                      <a href="#!">Mother`s Day</a>
                    </li>
                    <li>
                      <a href="#!">Apple Week</a>
                    </li>
                    <li>
                      <a href="#!">Logitech Sale</a>
                    </li>
                    <li>
                      <a href="#!">Headphones Sale</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="col-lg-4 d-flex align-items-center justify-content-lg-end">
                <div class="black_friday text-center">
                  <h3 class="text-uppercase">BLACK FRIDAY</h3>
                  <span>Get 45% off!</span>
                </div>
                <div class="language_select option_select">
                  <select>
                    <option data-display="Language Select">
                      Select A Option
                    </option>
                    <option value="1" selected>
                      English
                    </option>
                    <option value="2">Franch</option>
                    <option value="3" disabled>
                      portuguese
                    </option>
                    <option value="4">Spanish</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- slider_section - start */}
      <section class="slider_section sec_ptb_50 clearfix">
        <div class="container maxw_1600">
          <div class="row justify-content-lg-between">
            <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
              <div class="alldepartments_menu_wrap">
                <button
                  class="alldepartments_btn bg_electronic_blue text-uppercase"
                  type="button"
                  data-toggle="collapse"
                  data-target="#alldepartments_dropdown"
                  aria-expanded="false"
                  aria-controls="alldepartments_dropdown"
                >
                  <i class="far fa-bars"></i> All Departments
                </button>
                <div
                  class="alldepartments_dropdown show_lg collapse"
                  id="alldepartments_dropdown"
                >
                  <div class="card">
                    <ul class="alldepartments_menulist ul_li_block clearfix">
                      <li>
                        <a href="#!">Top 100 Offers</a>
                      </li>
                      <li>
                        <a href="#!">New Arrivals</a>
                      </li>
                      <li class="has_child">
                        <a href="#!">Computers & Laptops</a>
                      </li>
                      <li class="has_child">
                        <a href="#!">Cameras & Photo</a>
                      </li>
                      <li class="has_child">
                        <a href="#!">Smart Phones & Tablets</a>
                      </li>
                      <li>
                        <a href="#!">Video Games & Consoles</a>
                      </li>
                      <li class="has_child">
                        <a href="#!">TV & Audio</a>
                      </li>
                      <li>
                        <a href="#!">Gadgets</a>
                      </li>
                      <li class="has_child">
                        <a href="#!">Car Electronic & GPS</a>
                      </li>
                      <li class="has_child">
                        <a href="#!">Accesories</a>
                      </li>
                      <li>
                        <a href="#!">Virtual Reality</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div class="electronic_slider position-relative clearfix">
                <div
                  class="main_slider clearfix"
                  data-slick='{"arrows": false}'
                >
                  <div
                    class="item clearfix"
                    data-background="assets/images/slider/electronic/bg_01.jpg"
                  >
                    <div
                      class="slider_image order-last"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <img src="assets/ebook.jpg" alt="image_not_found" />
                    </div>
                    <div class="slider_content">
                      <h3
                        class="text-uppercase"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
                        The Ebook
                      </h3>
                      <p data-animation="fadeInUp" data-delay=".8s">
                        Big screens in incredibly slim designs that in your
                        hand.
                      </p>
                      <div
                        class="abtn_wrap clearfix"
                        data-animation="fadeInUp"
                        data-delay="1s"
                      >
                        <a
                          href="#!"
                          class="custom_btn btn_sm btn_border border_electronic"
                        >
                          Browse Now
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    class="item clearfix"
                    data-background="assets/images/slider/electronic/bg_01.jpg"
                  >
                    <div
                      class="slider_image order-last"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <img src="assets/vg.webp" alt="image_not_found" />
                    </div>
                    <div class="slider_content">
                      <h3
                        class="text-uppercase"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
                        Video Games
                      </h3>
                      <p data-animation="fadeInUp" data-delay=".8s">
                        Big screens in incredibly slim designs that in your
                        hand.
                      </p>
                      <div
                        class="abtn_wrap clearfix"
                        data-animation="fadeInUp"
                        data-delay="1s"
                      >
                        <a
                          href="#!"
                          class="custom_btn btn_sm btn_border border_electronic"
                        >
                          Browse Now
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    class="item clearfix"
                    data-background="assets/images/slider/electronic/bg_01.jpg"
                  >
                    <div
                      class="slider_image order-last"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <img src="assets/eb2.jpg" alt="image_not_found" />
                    </div>
                    <div class="slider_content">
                      <h3
                        class="text-uppercase"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
                        Artistic
                      </h3>
                      <p data-animation="fadeInUp" data-delay=".8s">
                        Big screens in incredibly slim designs that in your
                        hand.
                      </p>
                      <div
                        class="abtn_wrap clearfix"
                        data-animation="fadeInUp"
                        data-delay="1s"
                      >
                        <a
                          href="#!"
                          class="custom_btn btn_sm btn_border border_electronic"
                        >
                          Browse Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- slider progress --> */}
                <div class="slick-progress">
                  <span></span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div class="advertisement_image mb_30">
                <a href="#!">
                  <img src="assets/dg.png" alt="image_not_found" />
                </a>
              </div>
              <div class="advertisement_image">
                <a href="#!">
                  <img
                    src="assets/images/offer/electronic/img_03.jpg"
                    alt="image_not_found"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- slider_section - end */}

      {/* <!-- product_section - start */}
      <section class="product_section mb_50 clearfix">
        <div class="container maxw_1600">
          <div class="electronic_content_container">
            <div class="row justify-content-lg-between">
              <div class="col-lg-4">
                <div class="electronic_deals_slider">
                  <div class="item_header">
                    <h2 class="title_text text-white mb-0">
                      <strong>Deals</strong> of the week
                    </h2>
                  </div>
                  <div class="weekly_deals_carousel position-relative">
                    <div class="slideshow1_slider" data-slick='{"dots": false}'>
                      <div class="item">
                        <div class="electronic_deals_item">
                          <ul class="item_variations ul_li clearfix">
                            <li>
                              <button type="button">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NschTLPGZbM23R1EjxUWgYeVhfqsL9RLOQ&usqp=CAU"
                                  alt="image_not_found"
                                />
                              </button>
                            </li>
                            <li>
                              <button type="button">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NschTLPGZbM23R1EjxUWgYeVhfqsL9RLOQ&usqp=CAU"
                                  alt="image_not_found"
                                />
                              </button>
                            </li>
                            <li>
                              <button type="button">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NschTLPGZbM23R1EjxUWgYeVhfqsL9RLOQ&usqp=CAU"
                                  alt="image_not_found"
                                />
                              </button>
                            </li>
                            <li>
                              <button type="button">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NschTLPGZbM23R1EjxUWgYeVhfqsL9RLOQ&usqp=CAU"
                                  alt="image_not_found"
                                />
                              </button>
                            </li>
                          </ul>
                          <div class="item_price">
                            <strong>$425.89</strong> <del>$239.99</del>
                          </div>
                          <h3 class="item_title mb-0">
                            <a href="#!">Tablet Red EliteBook Revolve</a>
                          </h3>
                          <div class="item_image">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NschTLPGZbM23R1EjxUWgYeVhfqsL9RLOQ&usqp=CAU"
                              alt="image_not_found"
                            />
                          </div>
                          <div class="countdown_wrap">
                            <div class="countdown_content">
                              <h4>Hurry up!</h4>
                              <p>Offer ends in:</p>
                            </div>
                            <ul
                              class="countdown_timer timein_box ul_li clearfix"
                              data-countdown="2021/3/24"
                            ></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel_nav clearfix">
                      <button type="button" class="left_arrow d-inline-block">
                        <i class="fal fa-angle-left mr-1"></i> Previous deal
                      </button>
                      <button type="button" class="right_arrow d-inline-block">
                        Next deal <i class="fal fa-angle-right ml-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-8">
                <div class="electronic_product_group clearfix">
                  <ul class="electronic_tabs_nav nav ul_li_right clearfix">
                    <li>
                      <a class="active" data-toggle="tab" href="#featured_tab">
                        Featured
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#onsale_tab">
                        On Sale
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#toprated_tab">
                        Top Rated
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="featured_tab" class="tab-pane fade active">
                      <ul class="electronic_product_columns ul_li has_4columns clearfix">
                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <Link to={"/detail"}>
                              <img
                                src="https://media.istockphoto.com/id/1361939986/photo/conceptual-view-of-a-smart-speaker.jpg?s=612x612&w=0&k=20&c=3sMUOSi1Ny9VYFifdRxFlAFPGiicaRoBeWxDy-5SuCo="
                                alt="image_not_found"
                              />
                              </Link>
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="https://media.istockphoto.com/id/1361939986/photo/conceptual-view-of-a-smart-speaker.jpg?s=612x612&w=0&k=20&c=3sMUOSi1Ny9VYFifdRxFlAFPGiicaRoBeWxDy-5SuCo="
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="https://media.istockphoto.com/id/1361939986/photo/conceptual-view-of-a-smart-speaker.jpg?s=612x612&w=0&k=20&c=3sMUOSi1Ny9VYFifdRxFlAFPGiicaRoBeWxDy-5SuCo="
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="https://media.istockphoto.com/id/1361939986/photo/conceptual-view-of-a-smart-speaker.jpg?s=612x612&w=0&k=20&c=3sMUOSi1Ny9VYFifdRxFlAFPGiicaRoBeWxDy-5SuCo="
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="https://media.istockphoto.com/id/1361939986/photo/conceptual-view-of-a-smart-speaker.jpg?s=612x612&w=0&k=20&c=3sMUOSi1Ny9VYFifdRxFlAFPGiicaRoBeWxDy-5SuCo="
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="https://media.istockphoto.com/id/1361939986/photo/conceptual-view-of-a-smart-speaker.jpg?s=612x612&w=0&k=20&c=3sMUOSi1Ny9VYFifdRxFlAFPGiicaRoBeWxDy-5SuCo="
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="https://media.istockphoto.com/id/1361939986/photo/conceptual-view-of-a-smart-speaker.jpg?s=612x612&w=0&k=20&c=3sMUOSi1Ny9VYFifdRxFlAFPGiicaRoBeWxDy-5SuCo="
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="https://media.istockphoto.com/id/1361939986/photo/conceptual-view-of-a-smart-speaker.jpg?s=612x612&w=0&k=20&c=3sMUOSi1Ny9VYFifdRxFlAFPGiicaRoBeWxDy-5SuCo="
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div id="onsale_tab" class="tab-pane fade">
                      <ul class="electronic_product_columns ul_li has_4columns clearfix">
                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_02.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_03.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_04.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_05.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_06.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_07.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_08.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_09.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div id="toprated_tab" class="tab-pane fade">
                      <ul class="electronic_product_columns ul_li has_4columns clearfix">
                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_02.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_03.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_04.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_05.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_06.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_07.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_08.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="electronic_product_item">
                            <ul class="product_label ul_li clearfix">
                              <li>-$30</li>
                            </ul>
                            <div class="item_image">
                              <img
                                src="assets/images/shop/electronic/img_09.png"
                                alt="image_not_found"
                              />
                            </div>
                            <div class="item_content">
                              <span class="item_name">Speakers</span>
                              <h3 class="item_title">
                                <a href="#!">
                                  Wireless Audio System Multiroom 360
                                </a>
                              </h3>
                              <span class="item_price">$685.00</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- product_section - end */}

      {/* <!-- product_section - start */}
      <section class="product_section mb_50 clearfix">
        <div class="container maxw_1600">
          <div class="electronic_section_title clearfix">
            <div class="row align-items-center justify-content-lg-between">
              <div class="col-lg-3">
                <h2 class="title_text mb-0" data-bg-color="#ffd4d3">
                  <span data-bg-color="#e09e9c">
                    <i class="fal fa-plug"></i>
                  </span>{" "}
                  <strong>Flash</strong> Deal
                </h2>
              </div>

              <div class="col-lg-3 order-last">
                <div class="deals_items_countdown countdown_wrap">
                  <div class="countdown_content">
                    <h4>Hurry up!</h4>
                    <p>Offer ends in:</p>
                  </div>
                  <ul
                    class="countdown_timer timein_box ul_li_right clearfix"
                    data-countdown="2021/3/24"
                  ></ul>
                </div>
              </div>

              <div class="col-lg-6">
                <ul
                  class="electronic_tabs_nav2 ul_li_center nav"
                  role="tablist"
                >
                  <li>
                    <a class="active" data-toggle="tab" href="#tvvideo_tab">
                      TV & Video
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#cameras_tab">
                      Cameras
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#audio_tab">
                      Audio
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#cellphones_tab">
                      Cell Phones
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#gpsnavi_tab">
                      GPS & Navi
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#computers_tab">
                      Computers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="electronic_content_container">
            <div class="tab-content">
              <div id="tvvideo_tab" class="tab-pane active">
                <ul class="electronic_product_columns ul_li has_5columns mb_50 clearfix">
                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_10.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_11.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_12.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_13.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_14.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_15.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_16.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_17.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_18.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_19.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>
                </ul>

                <div class="abtn_wrap text-center clearfix">
                  <a href="#!" class="custom_btn btn_border border_electronic">
                    View All Products
                  </a>
                </div>
              </div>

              <div id="cameras_tab" class="tab-pane fade">
                <ul class="electronic_product_columns ul_li has_5columns mb_50 clearfix">
                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_10.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_11.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_12.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_13.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_14.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_15.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_16.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_17.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_18.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_19.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>
                </ul>

                <div class="abtn_wrap text-center clearfix">
                  <a href="#!" class="custom_btn btn_border border_electronic">
                    View All Products
                  </a>
                </div>
              </div>

              <div id="audio_tab" class="tab-pane fade">
                <ul class="electronic_product_columns ul_li has_5columns mb_50 clearfix">
                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_10.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_11.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_12.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_13.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_14.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_15.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_16.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_17.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_18.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_19.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>
                </ul>

                <div class="abtn_wrap text-center clearfix">
                  <a href="#!" class="custom_btn btn_border border_electronic">
                    View All Products
                  </a>
                </div>
              </div>

              <div id="cellphones_tab" class="tab-pane fade">
                <ul class="electronic_product_columns ul_li has_5columns mb_50 clearfix">
                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_10.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_11.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_12.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_13.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_14.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_15.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_16.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_17.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_18.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_19.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>
                </ul>

                <div class="abtn_wrap text-center clearfix">
                  <a href="#!" class="custom_btn btn_border border_electronic">
                    View All Products
                  </a>
                </div>
              </div>

              <div id="gpsnavi_tab" class="tab-pane fade">
                <ul class="electronic_product_columns ul_li has_5columns mb_50 clearfix">
                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_10.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_11.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_12.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_13.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_14.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_15.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_16.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_17.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_18.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_19.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>
                </ul>

                <div class="abtn_wrap text-center clearfix">
                  <a href="#!" class="custom_btn btn_border border_electronic">
                    View All Products
                  </a>
                </div>
              </div>

              <div id="computers_tab" class="tab-pane fade">
                <ul class="electronic_product_columns ul_li has_5columns mb_50 clearfix">
                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_10.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_11.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_12.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_13.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_14.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_15.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_16.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_17.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_18.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="electronic_product_item">
                      <ul class="product_label ul_li clearfix">
                        <li>-$30 off</li>
                      </ul>
                      <div class="item_image">
                        <img
                          src="assets/images/shop/electronic/img_19.png"
                          alt="image_not_found"
                        />
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a href="#!">Wireless Audio System Multiroom 360</a>
                        </h3>
                        <div class="progress_wrap">
                          <div class="progress">
                            <div
                              class="progress_bar wow Rx_width_20 animated"
                              role="progressbar"
                              data-wow-duration="0.5s"
                              data-wow-delay=".1s"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="value_text">796 Sold</span>
                        </div>
                        <span class="item_price">$685.00</span>
                      </div>
                    </div>
                  </li>
                </ul>

                <div class="abtn_wrap text-center clearfix">
                  <a href="#!" class="custom_btn btn_border border_electronic">
                    View All Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- product_section - end */}

      {/* <!-- footer_section - start */}
      <footer class="footer_section electronic_footer clearfix">
        <div class="footer_widget_area clearfix">
          <div class="container maxw_1600">
            <div class="row justify-content-lg-between">
              <div class="col-lg-3 col-md-4">
                <div class="footer_widget footer_about">
                  <div class="brand_logo mb_30">
                    <a href="index.html">
                      <img
                        src="assets/images/logo/logo_17_1x.png"
                        srcset="assets/images/logo/logo_17_2x.png 2x"
                        alt="logo_not_found"
                      />
                    </a>
                  </div>
                  <p class="mb_30">
                    Phasellus justo ligula, dictum sit amet tortor eu, iaculis
                    tristique turpis. Mauris non orci sed est suscipit tempor ut
                    quis felis. Praesent pellentesque
                  </p>

                  <div class="footer_electronic_hotline mb_30">
                    <i class="fal fa-headset"></i>
                    <h4>GOT QUESTION? CALL US 24/7!</h4>
                    <span>801 017 197</span>
                  </div>

                  <ul class="circle_social_links ul_li clearfix">
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
                        <i class="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="footer_widget footer_useful_links clearfix">
                  <h3 class="footer_widget_title text-white text-uppercase">
                    FIND IT FAST
                  </h3>
                  <ul class="ul_li_block clearfix">
                    <li>
                      <a href="#!">Laptops, Ultrabooks & Computers</a>
                    </li>
                    <li>
                      <a href="#!">Cameras & Photography</a>
                    </li>
                    <li>
                      <a href="#!">Smart Phones & Tablets</a>
                    </li>
                    <li>
                      <a href="#!">Video Games & Consoles</a>
                    </li>
                    <li>
                      <a href="#!">TV & Audio</a>
                    </li>
                    <li>
                      <a href="#!">Gadgets</a>
                    </li>
                    <li>
                      <a href="#!">Car Electronic & GPS</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-2 col-md-4">
                <div class="footer_widget footer_useful_links clearfix">
                  <h3 class="footer_widget_title text-white text-uppercase">
                    CUSTOMER CARE
                  </h3>
                  <ul class="ul_li_block clearfix">
                    <li>
                      <a href="#!">My Account</a>
                    </li>
                    <li>
                      <a href="#!">Track your Order</a>
                    </li>
                    <li>
                      <a href="#!">Wishlist</a>
                    </li>
                    <li>
                      <a href="#!">Customer Service</a>
                    </li>
                    <li>
                      <a href="#!">Returns/Exchange</a>
                    </li>
                    <li>
                      <a href="#!">FAQs</a>
                    </li>
                    <li>
                      <a href="#!">Product Support</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-4 col-md-12">
                <div class="footer_widget footer_recent_post">
                  <h3 class="footer_widget_title text-white text-uppercase mb-0">
                    Weekly Selected
                  </h3>
                  <div class="row justify-content-lg-between">
                    <div class="col-lg-6 col-md-6">
                      <div class="electronic_product_small">
                        <a class="item_image" href="#!">
                          <img
                            src="assets/images/shop/electronic/img_27.png"
                            alt="image_not_found"
                          />
                        </a>
                        <div class="item_content">
                          <h4 class="item_title">
                            <a href="#!">Red Wireless Headphones Solo</a>
                          </h4>
                          <span class="item_price">$3,49.99</span>
                        </div>
                      </div>

                      <div class="electronic_product_small">
                        <a class="item_image" href="#!">
                          <img
                            src="assets/images/shop/electronic/img_31.png"
                            alt="image_not_found"
                          />
                        </a>
                        <div class="item_content">
                          <h4 class="item_title">
                            <a href="#!">Red Wireless Headphones Solo</a>
                          </h4>
                          <span class="item_price">$3,49.99</span>
                        </div>
                      </div>

                      <div class="electronic_product_small">
                        <a class="item_image" href="#!">
                          <img
                            src="assets/images/shop/electronic/img_24.png"
                            alt="image_not_found"
                          />
                        </a>
                        <div class="item_content">
                          <h4 class="item_title">
                            <a href="#!">Red Wireless Headphones Solo</a>
                          </h4>
                          <span class="item_price">$3,49.99</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                      <div class="electronic_product_small">
                        <a class="item_image" href="#!">
                          <img
                            src="assets/images/shop/electronic/img_23.png"
                            alt="image_not_found"
                          />
                        </a>
                        <div class="item_content">
                          <h4 class="item_title">
                            <a href="#!">Red Wireless Headphones Solo</a>
                          </h4>
                          <span class="item_price">$3,49.99</span>
                        </div>
                      </div>

                      <div class="electronic_product_small">
                        <a class="item_image" href="#!">
                          <img
                            src="assets/images/shop/electronic/img_26.png"
                            alt="image_not_found"
                          />
                        </a>
                        <div class="item_content">
                          <h4 class="item_title">
                            <a href="#!">Red Wireless Headphones Solo</a>
                          </h4>
                          <span class="item_price">$3,49.99</span>
                        </div>
                      </div>

                      <div class="electronic_product_small">
                        <a class="item_image" href="#!">
                          <img
                            src="assets/images/shop/electronic/img_07.png"
                            alt="image_not_found"
                          />
                        </a>
                        <div class="item_content">
                          <h4 class="item_title">
                            <a href="#!">Red Wireless Headphones Solo</a>
                          </h4>
                          <span class="item_price">$3,49.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer_bottom text-center bg_black clearfix">
          <div class="container maxw_1600">
            <p class="copyright_text mb-0">
              Copyright © 2021,{" "}
              <a href="#!" class="author_link">
                Neoncart
              </a>{" "}
              marketplace eCommerce. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
      {/* <!-- footer_section - end */}
    </div>
  );
}

export default DigitalProduct;