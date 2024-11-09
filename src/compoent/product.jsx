import React from 'react'

function Product() {
  return (
    // <!-- product_section - start
			<section className="product_section sec_ptb_140 pb-0 clearfix">
				<div className="container-fluid prl_60">

					<div className="fashion_section_title text-center mb_50">
						<h2 className="title_text mb_15">Men's Wear Deal</h2>
						<h4 className="sub_title text-uppercase">Aenean feugiat libero ligula</h4>
					</div>

					<ul className="fashion_filter_btns mb_15 button-group filters-button-group ul_li_center clearfix">
						<li><button className="active" data-filter="*">ALL</button></li>
						<li><button data-filter=".men">MEN</button></li>
						<li><button data-filter=".women">WOMEN</button></li>
						<li><button data-filter=".collection">COLLECTION</button></li>
					</ul>

					<div className="element-grid column5_element_grid mb_50">
						<div className="element-item women " data-category="women">
							<div className="fashion_product_item">
								<ul className="product_label ul_li text-uppercase clearfix">
									<li className="bg_fashion_red">New</li>
								</ul>
								<div className="item_image">
									<img src="assets/images/shop/fashion/img_04.jpg" alt="image_not_found" />
									<ul className="product_action_btns ul_li_center clearfix">
										<li>
											<a className="addtocart_btn tooltips" data-placement="top" title="Add To Cart" href="#!">
												<i className="fal fa-shopping-basket"></i> Buy
											</a>
										</li>
										<li><a className="tooltips" data-placement="top" title="Compare" href="#!"><i className="far fa-random"></i></a></li>
										<li><a className="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i className="fal fa-heart"></i></a></li>
									</ul>
								</div>
								<div className="item_content">
									<span className="item_category text-uppercase">category</span>
									<h3 className="item_title"><a href="#!">Striped slides with jute</a></h3>
									<span className="item_price">€160.00</span>
								</div>
							</div>
						</div>

						<div className="element-item collection " data-category="collection">
							<div className="fashion_product_item">
								<ul className="product_label ul_li text-uppercase clearfix">
									<li className="bg_fashion_red">New</li>
								</ul>
								<div className="item_image">
									<img src="assets/images/shop/fashion/img_05.jpg" alt="image_not_found" />
									<ul className="product_action_btns ul_li_center clearfix">
										<li>
											<a className="addtocart_btn tooltips" data-placement="top" title="Add To Cart" href="#!">
												<i className="fal fa-shopping-basket"></i> Buy
											</a>
										</li>
										<li><a className="tooltips" data-placement="top" title="Compare" href="#!"><i className="far fa-random"></i></a></li>
										<li><a className="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i className="fal fa-heart"></i></a></li>
									</ul>
								</div>
								<div className="item_content">
									<span className="item_category text-uppercase">category</span>
									<h3 className="item_title"><a href="#!">Striped slides with jute</a></h3>
									<span className="item_price">€160.00</span>
								</div>
							</div>
						</div>

						<div className="element-item men " data-category="men">
							<div className="fashion_product_item">
								<ul className="product_label ul_li text-uppercase clearfix">
									<li className="bg_fashion_red">New</li>
								</ul>
								<div className="item_image">
									<img src="assets/images/shop/fashion/img_06.jpg" alt="image_not_found" />
									<ul className="product_action_btns ul_li_center clearfix">
										<li>
											<a className="addtocart_btn tooltips" data-placement="top" title="Add To Cart" href="#!">
												<i className="fal fa-shopping-basket"></i> Buy
											</a>
										</li>
										<li><a className="tooltips" data-placement="top" title="Compare" href="#!"><i className="far fa-random"></i></a></li>
										<li><a className="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i className="fal fa-heart"></i></a></li>
									</ul>
								</div>
								<div className="item_content">
									<span className="item_category text-uppercase">category</span>
									<h3 className="item_title"><a href="#!">Striped slides with jute</a></h3>
									<span className="item_price">€160.00</span>
								</div>
							</div>
						</div>

						<div className="element-item women " data-category="women">
							<div className="fashion_product_item">
								<ul className="product_label ul_li text-uppercase clearfix">
									<li className="bg_fashion_red">New</li>
								</ul>
								<div className="item_image">
									<img src="assets/images/shop/fashion/img_07.jpg" alt="image_not_found" />
									<ul className="product_action_btns ul_li_center clearfix">
										<li>
											<a className="addtocart_btn tooltips" data-placement="top" title="Add To Cart" href="#!">
												<i className="fal fa-shopping-basket"></i> Buy
											</a>
										</li>
										<li><a className="tooltips" data-placement="top" title="Compare" href="#!"><i className="far fa-random"></i></a></li>
										<li><a className="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i className="fal fa-heart"></i></a></li>
									</ul>
								</div>
								<div className="item_content">
									<span className="item_category text-uppercase">category</span>
									<h3 className="item_title"><a href="#!">Striped slides with jute</a></h3>
									<span className="item_price">€160.00</span>
								</div>
							</div>
						</div>

						<div className="element-item collection " data-category="collection">
							<div className="fashion_product_item">
								<ul className="product_label ul_li text-uppercase clearfix">
									<li className="bg_fashion_red">New</li>
								</ul>
								<div className="item_image">
									<img src="assets/images/shop/fashion/img_08.jpg" alt="image_not_found" />
									<ul className="product_action_btns ul_li_center clearfix">
										<li>
											<a className="addtocart_btn tooltips" data-placement="top" title="Add To Cart" href="#!">
												<i className="fal fa-shopping-basket"></i> Buy
											</a>
										</li>
										<li><a className="tooltips" data-placement="top" title="Compare" href="#!"><i className="far fa-random"></i></a></li>
										<li><a className="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i className="fal fa-heart"></i></a></li>
									</ul>
								</div>
								<div className="item_content">
									<span className="item_category text-uppercase">category</span>
									<h3 className="item_title"><a href="#!">Striped slides with jute</a></h3>
									<span className="item_price">€160.00</span>
								</div>
							</div>
						</div>

						<div className="element-item men " data-category="men">
							<div className="fashion_product_item">
								<ul className="product_label ul_li text-uppercase clearfix">
									<li className="bg_fashion_red">New</li>
								</ul>
								<div className="item_image">
									<img src="assets/images/shop/fashion/img_09.jpg" alt="image_not_found" />
									<ul className="product_action_btns ul_li_center clearfix">
										<li>
											<a className="addtocart_btn tooltips" data-placement="top" title="Add To Cart" href="#!">
												<i className="fal fa-shopping-basket"></i> Buy
											</a>
										</li>
										<li><a className="tooltips" data-placement="top" title="Compare" href="#!"><i className="far fa-random"></i></a></li>
										<li><a className="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i className="fal fa-heart"></i></a></li>
									</ul>
								</div>
								<div className="item_content">
									<span className="item_category text-uppercase">category</span>
									<h3 className="item_title"><a href="#!">Striped slides with jute</a></h3>
									<span className="item_price">€160.00</span>
								</div>
							</div>
						</div>

						<div className="element-item women " data-category="women">
							<div className="fashion_product_item">
								<ul className="product_label ul_li text-uppercase clearfix">
									<li className="bg_fashion_red">New</li>
								</ul>
								<div className="item_image">
									<img src="assets/images/shop/fashion/img_10.jpg" alt="image_not_found" />
									<ul className="product_action_btns ul_li_center clearfix">
										<li>
											<a className="addtocart_btn tooltips" data-placement="top" title="Add To Cart" href="#!">
												<i className="fal fa-shopping-basket"></i> Buy
											</a>
										</li>
										<li><a className="tooltips" data-placement="top" title="Compare" href="#!"><i className="far fa-random"></i></a></li>
										<li><a className="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i className="fal fa-heart"></i></a></li>
									</ul>
								</div>
								<div className="item_content">
									<span className="item_category text-uppercase">category</span>
									<h3 className="item_title"><a href="#!">Striped slides with jute</a></h3>
									<span className="item_price">€160.00</span>
								</div>
							</div>
						</div>

						<div className="element-item collection " data-category="collection">
							<div className="fashion_product_item">
								<ul className="product_label ul_li text-uppercase clearfix">
									<li className="bg_fashion_red">New</li>
								</ul>
								<div className="item_image">
									<img src="assets/images/shop/fashion/img_11.jpg" alt="image_not_found" />
									<ul className="product_action_btns ul_li_center clearfix">
										<li>
											<a className="addtocart_btn tooltips" data-placement="top" title="Add To Cart" href="#!">
												<i className="fal fa-shopping-basket"></i> Buy
											</a>
										</li>
										<li><a className="tooltips" data-placement="top" title="Compare" href="#!"><i className="far fa-random"></i></a></li>
										<li><a className="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i className="fal fa-heart"></i></a></li>
									</ul>
								</div>
								<div className="item_content">
									<span className="item_category text-uppercase">category</span>
									<h3 className="item_title"><a href="#!">Striped slides with jute</a></h3>
									<span className="item_price">€160.00</span>
								</div>
							</div>
						</div>

						<div className="element-item women " data-category="women">
							<div className="fashion_product_item">
								<ul className="product_label ul_li text-uppercase clearfix">
									<li className="bg_fashion_red">New</li>
								</ul>
								<div className="item_image">
									<img src="assets/images/shop/fashion/img_12.jpg" alt="image_not_found" />
									<ul className="product_action_btns ul_li_center clearfix">
										<li>
											<a className="addtocart_btn tooltips" data-placement="top" title="Add To Cart" href="#!">
												<i className="fal fa-shopping-basket"></i> Buy
											</a>
										</li>
										<li><a className="tooltips" data-placement="top" title="Compare" href="#!"><i className="far fa-random"></i></a></li>
										<li><a className="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i className="fal fa-heart"></i></a></li>
									</ul>
								</div>
								<div className="item_content">
									<span className="item_category text-uppercase">category</span>
									<h3 className="item_title"><a href="#!">Striped slides with jute</a></h3>
									<span className="item_price">€160.00</span>
								</div>
							</div>
						</div>

						<div className="element-item men " data-category="men">
							<div className="fashion_product_item">
								<ul className="product_label ul_li text-uppercase clearfix">
									<li className="bg_fashion_red">New</li>
								</ul>
								<div className="item_image">
									<img src="assets/images/shop/fashion/img_13.jpg" alt="image_not_found" />
									<ul className="product_action_btns ul_li_center clearfix">
										<li>
											<a className="addtocart_btn tooltips" data-placement="top" title="Add To Cart" href="#!">
												<i className="fal fa-shopping-basket"></i> Buy
											</a>
										</li>
										<li><a className="tooltips" data-placement="top" title="Compare" href="#!"><i className="far fa-random"></i></a></li>
										<li><a className="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i className="fal fa-heart"></i></a></li>
									</ul>
								</div>
								<div className="item_content">
									<span className="item_category text-uppercase">category</span>
									<h3 className="item_title"><a href="#!">Striped slides with jute</a></h3>
									<span className="item_price">€160.00</span>
								</div>
							</div>
						</div>
					</div>

					<div className="load_more text-center clearfix">
						<a className="custom_btn btn_round bg_fashion_red text-uppercase" href="#!">View More</a>
					</div>
				</div>
			</section>
			// {/* <!-- product_section - end */}

  )
}

export default Product