import React from 'react'
import Footer from '../../compoent/footer';

function PrintedProduct() {
  return (
    <div>
      <header class="header_section electronic_header clearfix">
        <div class="header_advertisement">
          <img
            src="assets/images/offer/electronic/img_01.png"
            alt="image_not_found"
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
                    <div class="option_select"></div>
                    <button type="submit" class="submit_btn">
                      <i class="fal fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>

              <div class="col-lg-3">
                <ul class="electronic_action_btns ul_li_right clearfix">
                  <li>
                    <a href="login.html">
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
                <div class="language_select option_select"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- product_section - start */}
      <section class="product_section sec_ptb_140 clearfix">
        <div class="container-fluid prl_90">
          <div class="row mb_30 align-items-center justify-content-lg-between">
            <div class="col-lg-6">
              <div class="furniture_section_title">
                {/* <span class="sub_title mb_15">
                  Aliquam lorem ante, dapibus in, viverra
                </span> */}
                <h2 class="title_text mb-0">PRINTED PRODUCTS</h2>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="furniture_tab_wrap clearfix">
                <a href="#!" class="child_btn btn_border border_gray">
                  ALL PRODUCTS
                </a>
              </div>
            </div>
          </div>

          <div class="tab-content">
            <div id="chair_tab" class="tab-pane active">
              <div class="furniture_product_group row">
                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                    <ul class="product_label ul_li text-uppercase float-right clearfix">
                      <li>Sale</li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img src="assets/mock1.jpeg" alt="image_not_found" />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img src="assets/mock1.jpeg" alt="image_not_found" />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                    <ul class="product_label ul_li text-uppercase float-right clearfix">
                      <li>Sale</li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img src="assets/mock1.jpeg" alt="image_not_found" />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img src="assets/mock1.jpeg" alt="image_not_found" />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                    <ul class="product_label ul_li text-uppercase float-right clearfix">
                      <li>Sale</li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img src="assets/mock1.jpeg" alt="image_not_found" />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img src="assets/mock1.jpeg" alt="image_not_found" />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img src="assets/mock1.jpeg" alt="image_not_found" />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                    <ul class="product_label ul_li text-uppercase float-right clearfix">
                      <li>Sale</li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img src="assets/mock1.jpeg" alt="image_not_found" />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_09.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_10.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_11.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_12.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class="load_more text-center clearfix">
                <a
                  class="custom_btn bg_furniture_brown text-uppercase"
                  href="#!"
                >
                  View More
                </a>
              </div>
            </div>

            <div id="sofa_tab" class="tab-pane fade">
              <div class="furniture_product_group row">
                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                    <ul class="product_label ul_li text-uppercase float-right clearfix">
                      <li>Sale</li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_01.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_02.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                    <ul class="product_label ul_li text-uppercase float-right clearfix">
                      <li>Sale</li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_03.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_04.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                    <ul class="product_label ul_li text-uppercase float-right clearfix">
                      <li>Sale</li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_05.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_06.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_07.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                    <ul class="product_label ul_li text-uppercase float-right clearfix">
                      <li>Sale</li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_08.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_09.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_10.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_11.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_12.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class="load_more text-center clearfix">
                <a
                  class="custom_btn bg_furniture_brown text-uppercase"
                  href="#!"
                >
                  View More
                </a>
              </div>
            </div>

            <div id="lamps_tab" class="tab-pane fade">
              <div class="furniture_product_group row">
                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                    <ul class="product_label ul_li text-uppercase float-right clearfix">
                      <li>Sale</li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_01.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_02.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                    <ul class="product_label ul_li text-uppercase float-right clearfix">
                      <li>Sale</li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_03.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_04.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                    <ul class="product_label ul_li text-uppercase float-right clearfix">
                      <li>Sale</li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_05.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_06.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_07.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                    <ul class="product_label ul_li text-uppercase float-right clearfix">
                      <li>Sale</li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_08.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_09.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_10.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_11.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>

                <div class="furniture_product_grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="top_bar clearfix">
                    <ul class="rating_star ul_li float-left clearfix">
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="item_image">
                    <img
                      src="assets/images/shop/furniture_store/img_12.png"
                      alt="image_not_found"
                    />
                    <ul class="product_action_btns ul_li_center clearfix">
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Quick View"
                          href="#!"
                          data-toggle="modal"
                          data-target="#quickview_modal"
                        >
                          <i class="fal fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="tooltips"
                          data-placement="top"
                          title="Add To Wishlist"
                          href="#!"
                        >
                          <i class="fal fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="addtocart_btn tooltips"
                          data-placement="top"
                          title="Add To Cart"
                          href="#!"
                        >
                          <i class="fal fa-shopping-basket"></i> Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="#!">Bathroom lighting</a>
                    </h3>
                    <span class="item_price">
                      <strong> $100.00</strong> <del> $150.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class="load_more text-center clearfix">
                <a
                  class="custom_btn bg_furniture_brown text-uppercase"
                  href="#!"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- product_section - end */}
      <Footer />
    </div>
  );
}

export default PrintedProduct;