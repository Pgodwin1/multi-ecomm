import React from 'react'

function Dashboard() {
  return (
    <div className="home_carparts">


		{/* <!-- backtotop - start --> */}
		<div id="thetop"></div>
		<div class="backtotop bg_carparts_red">
			<a href="#" class="scroll">
				<i class="far fa-arrow-up"></i>
			</a>
		</div>
		{/* <!-- backtotop - end --> */}

		{/* <!-- preloader - start --> */}
		<div id="preloader"></div>
		{/* <!-- preloader - end --> */}


		{/* <!-- header_section - start */}

		<header class="header_section carparts_header clearfix">
			<div class="container">
				<div class="content_wrap">
					<div class="row no-gutters">
						<div class="col-lg-3">
							<div class="brand_logo">
								<a class="brand_link" href="index.html">
									<img src="assets/images/logo/logo_01_1x.png" srcset="assets/images/logo/logo_01_2x.png 2x" alt="logo_not_found" />
								</a>

								<ul class="mh_action_btns ul_li clearfix">
									<li>
										<button type="button" class="search_btn" data-toggle="collapse" data-target="#search_body_collapse" aria-expanded="false" aria-controls="search_body_collapse">
											<i class="fal fa-search"></i>
										</button>
									</li>
									<li>
										<button type="button" class="cart_btn">
											<i class="fal fa-shopping-cart"></i>
											<span class="btn_badge">2</span>
										</button>
									</li>
									<li><button type="button" class="mobile_menu_btn"><i class="far fa-bars"></i></button></li>
								</ul>
							</div>
						</div>

						<div class="col-lg-9">
							<div class="header_top">
								<div class="row w-100 d-flex align-items-center justify-content-lg-between">
									<div class="col-lg-6">
										<form action="#">
											<div class="form_item search_box">
												<input type="search" name="search" placeholder="Search" />
												<button type="submit" class="submit_btn bg_carparts_red"><i class="fal fa-search"></i></button>
											</div>
										</form>
									</div>

									<div class="col-lg-3">
										<div class="login_cart_btn user_btn" data-toggle="collapse" role="button" data-target="#use_deropdown" aria-expanded="false" aria-controls="use_deropdown">
											<div class="item_icon">
												<img src="assets/images/icons/user.png" alt="user_icon" />
											</div>
											<div class="item_content">
												<span>Login here</span>
												<strong>My Account</strong>
											</div>
										</div>
										<div id="use_deropdown" class="collapse_dropdown collapse">
											<div class="dropdown_content">
												<div class="profile_info clearfix">
													<div class="user_thumbnail">
														<img src="assets/images/meta/img_01.png" alt="thumbnail_not_found" />
													</div>
													<div class="user_content">
														<h4 class="user_name">Jone Doe</h4>
														<span class="user_title">Seller</span>
													</div>
												</div>
												<ul class="settings_options ul_li_block clearfix">
													<li><a href="#!"><i class="fal fa-user-circle"></i> Profile</a></li>
													<li><a href="#!"><i class="fal fa-user-cog"></i> Settings</a></li>
													<li><a href="#!"><i class="fal fa-sign-out-alt"></i> Logout</a></li>
												</ul>
											</div>
										</div>
									</div>

									<div class="col-lg-3">
										<div class="login_cart_btn cart_btn">
											<div class="item_icon">
												<img src="assets/images/icons/shopping_cart.png" alt="user_icon" />
											</div>
											<div class="item_content">
												<span>Shopping Cart</span>
												<strong>$0.00</strong>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="header_bottom">
								<nav class="main_menu clearfix">
									<ul class="ul_li clearfix">
										<li class="menu_item_has_child">
											<a href="#!">Home</a>
											<div class="mega_menu pt-0 text-center">
												<div class="background" data-bg-color="#ffffff">
													<div class="container">
														<ul class="home_pages ul_li clearfix">
															<li>
																<a href="home_carparts.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/carparts.png" alt="image_not_found" />
																	</span>
																	<span class="item_title">Car Parts</span>
																</a>
															</li>
															<li>
																<a href="home_classic_ecommerce.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/classic_ecommarce.png" alt="image_not_found" />
																	</span>
																	<span class="item_title">Classic Ecommerce</span>
																</a>
															</li>
															<li>
																<a href="home_creative_onelook.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/creative_onelook.png" alt="image_not_found" />
																	</span>
																	<span class="item_title">Creative Onelook</span>
																</a>
															</li>
															<li>
																<a href="home_electronic.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/electronic.png" alt="image_not_found" />
																	</span>
																	<span class="item_title">Electronic</span>
																</a>
															</li>
															<li>
																<a href="home_fashion.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/fashion.png" alt="image_not_found" />
																	</span>
																	<span class="item_title">Fashion</span>
																</a>
															</li>
															<li>
																<a href="home_fashion_minimal.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/fashion_minimal.png" alt="image_not_found" />
																	</span>
																	<span class="item_title">Fashion Minimal</span>
																</a>
															</li>
															<li>
																<a href="home_furniture.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/furniture.png" alt="image_not_found" />
																	</span>
																	<span class="item_title">Furniture</span>
																</a>
															</li>
															<li>
																<a href="home_gadget.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/gadget.png" alt="image_not_found" />
																	</span>
																	<span class="item_title">Gadget</span>
																</a>
															</li>
															<li>
																<a href="home_lookbook_creative.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/lookbook_creative.png" alt="image_not_found" />
																	</span>
																	<span class="item_title">Lookbook Creative</span>
																</a>
															</li>
															<li>
																<a href="home_lookbook_slide.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/lookbook_slide.png" alt="image_not_found" />
																	</span>
																	<span class="item_title">Lookbook Slide</span>
																</a>
															</li>
															<li>
																<a href="home_medical.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/medical.png" alt="image_not_found" />
																	</span>
																	<span class="item_title">Medical</span>
																</a>
															</li>
															<li>
																<a href="home_modern.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/modern.png" alt="image_not_found"/>
																	</span>
																	<span class="item_title">Modern</span>
																</a>
															</li>
															<li>
																<a href="home_modern_minimal.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/modern_minimal.png" alt="image_not_found"/>
																	</span>
																	<span class="item_title">Modern Minimal</span>
																</a>
															</li>
															<li>
																<a href="home_motorcycle.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/motorcycle.png" alt="image_not_found"/>
																	</span>
																	<span class="item_title">Motorcycle</span>
																</a>
															</li>
															<li>
																<a href="home_parallax_shop.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/parallax_shop.png" alt="image_not_found" />
																	</span>
																	<span class="item_title">Parallax Shop</span>
																</a>
															</li>
															<li>
																<a href="home_simple_shop.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/simple_shop.png" alt="image_not_found"/>
																	</span>
																	<span class="item_title">Simple Shop</span>
																</a>
															</li>
															<li>
																<a href="home_single_story_black.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/single_story_black.png" alt="image_not_found"/>
																	</span>
																	<span class="item_title">Single Story Black</span>
																</a>
															</li>
															<li>
																<a href="home_single_story_white.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/single_story_white.png" alt="image_not_found"/>
																	</span>
																	<span class="item_title">Single Story White</span>
																</a>
															</li>
															<li>
																<a href="home_sports.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/sports.png" alt="image_not_found"/>
																	</span>
																	<span class="item_title">Sports Shop</span>
																</a>
															</li>
															<li>
																<a href="home_supermarket.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/supermarket.png" alt="image_not_found"/>
																	</span>
																	<span class="item_title">Supermarket</span>
																</a>
															</li>
															<li>
																<a href="home_watch.html">
																	<span class="item_image">
																		<img src="assets/images/home_pages/watch.png" alt="image_not_found"/>
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
											<div class="mega_menu pt-0">
												<div class="background" data-bg-color="#ffffff">
													<div class="container">
														<div class="row mt__30">
															<div class="col-lg-3">
																<div class="page_links">
																	<h3 class="title_text">Carparts</h3>
																	<ul class="ul_li_block">
																		<li><a href="carparts_shop.html">Shop Page</a></li>
																		<li><a href="carparts_shop_grid.html">Shop Grid</a></li>
																		<li><a href="carparts_shop_list.html">Shop List</a></li>
																		<li><a href="carparts_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>

																<div class="page_links">
																	<h3 class="title_text">Classic Ecommerce</h3>
																	<ul class="ul_li_block">
																		<li><a href="classic_ecommerce_shop.html">Shop Page</a></li>
																		<li><a href="classic_ecommerce_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>

																<div class="page_links">
																	<h3 class="title_text">Electronic</h3>
																	<ul class="ul_li_block">
																		<li><a href="electronic_shop.html">Shop Page</a></li>
																		<li><a href="electronic_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>

																<div class="page_links">
																	<h3 class="title_text">Fashion</h3>
																	<ul class="ul_li_block">
																		<li><a href="fashion_shop.html">Shop Page</a></li>
																		<li><a href="fashion_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>
															</div>

															<div class="col-lg-3">
																<div class="page_links">
																	<h3 class="title_text">Fashion Minimal</h3>
																	<ul class="ul_li_block">
																		<li><a href="fashion_minimal_shop.html">Shop Page</a></li>
																		<li><a href="fashion_minimal_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>

																<div class="page_links">
																	<h3 class="title_text">Fashion Minimal</h3>
																	<ul class="ul_li_block">
																		<li><a href="fashion_minimal_shop.html">Shop Page</a></li>
																		<li><a href="fashion_minimal_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>

																<div class="page_links">
																	<h3 class="title_text">Furniture</h3>
																	<ul class="ul_li_block">
																		<li><a href="furniture_shop.html">Shop Page</a></li>
																		<li><a href="furniture_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>

																<div class="page_links">
																	<h3 class="title_text">Gadget</h3>
																	<ul class="ul_li_block">
																		<li><a href="gadget_shop.html">Shop Page</a></li>
																		<li><a href="gadget_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>
															</div>

															<div class="col-lg-3">
																<div class="page_links">
																	<h3 class="title_text">Medical</h3>
																	<ul class="ul_li_block">
																		<li><a href="medical_shop.html">Shop Page</a></li>
																		<li><a href="medical_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>

																<div class="page_links">
																	<h3 class="title_text">Modern Minimal</h3>
																	<ul class="ul_li_block">
																		<li><a href="modern_minimal_shop.html">Shop Page</a></li>
																		<li><a href="modern_minimal_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>

																<div class="page_links">
																	<h3 class="title_text">Modern</h3>
																	<ul class="ul_li_block">
																		<li><a href="modern_shop.html">Shop Page</a></li>
																		<li><a href="modern_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>

																<div class="page_links">
																	<h3 class="title_text">Motorcycle</h3>
																	<ul class="ul_li_block">
																		<li><a href="motorcycle_shop_grid.html">Shop Grid</a></li>
																		<li><a href="motorcycle_shop_list.html">Shop List</a></li>
																		<li><a href="motorcycle_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>
															</div>

															<div class="col-lg-3">
																<div class="page_links">
																	<h3 class="title_text">Simple Shop</h3>
																	<ul class="ul_li_block">
																		<li><a href="simple_shop.html">Shop Page</a></li>
																		<li><a href="simple_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>

																<div class="page_links">
																	<h3 class="title_text">Sports</h3>
																	<ul class="ul_li_block">
																		<li><a href="sports_shop.html">Shop Page</a></li>
																		<li><a href="sports_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>

																<div class="page_links">
																	<h3 class="title_text">Lookbook</h3>
																	<ul class="ul_li_block">
																		<li><a href="lookbook_creative_shop.html">Shop Page</a></li>
																		<li><a href="lookbook_creative_shop_details.html">Shop Details</a></li>
																	</ul>
																</div>

																<div class="page_links">
																	<h3 class="title_text">Shop Other Pages</h3>
																	<ul class="ul_li_block">
																		<li><a href="#!"><del>Shop Page</del></a></li>
																		<li><a href="shop_details.html">Shop Details</a></li>
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
														<li><a href="shop_cart.html">Shopping Cart</a></li>
														<li><a href="shop_checkout.html">Checkout Step 1</a></li>
														<li><a href="shop_checkout_step2.html">Checkout Step 2</a></li>
														<li><a href="shop_checkout_step3.html">Checkout Step 3</a></li>
													</ul>
												</li>
												<li><a href="404.html">404 Page</a></li>
												<li class="menu_item_has_child">
													<a href="#!">Blogs</a>
													<ul class="submenu">
														<li><a href="blog.html">Blog Page</a></li>
														<li><a href="blog_details.html">Blog Details</a></li>
													</ul>
												</li>
												<li class="menu_item_has_child">
													<a href="#!">Compare</a>
													<ul class="submenu">
														<li><a href="compare_1.html">Compare V.1</a></li>
														<li><a href="compare_2.html">Compare V.2</a></li>
													</ul>
												</li>
												<li class="menu_item_has_child">
													<a href="#!">Register</a>
													<ul class="submenu">
														<li><a href="login.html">Login</a></li>
														<li><a href="signup.html">Sign Up</a></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><a href="#!">About us</a></li>
										<li><a href="contact.html">Contact us</a></li>
									</ul>
								</nav>

								<a class="custom_btn bg_carparts_red" href="#!">Buy This Theme</a>
							</div>
						</div>
					</div>

					<div id="search_body_collapse" class="search_body_collapse collapse">
						<div class="search_body">
							<div class="container-fluid prl_90">
								<form action="#">
									<div class="form_item mb-0">
										<input type="search" name="search" placeholder="Type here..."/>
										<button type="submit"><i class="fal fa-search"></i></button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		{/* <!-- header_section - end */}


			{/* <!-- sidebar mobile menu & sidebar cart - start */}
			<div class="sidebar-menu-wrapper">
				<div class="cart_sidebar">
					<button type="button" class="close_btn"><i class="fal fa-times"></i></button>

					<ul class="cart_items_list ul_li_block mb_30 clearfix">
						<li>
							<div class="item_image">
								<img src="assets/images/cart/img_01.jpg" alt="image_not_found"/>
							</div>
							<div class="item_content">
								<h4 class="item_title">Yellow Blouse</h4>
								<span class="item_price">$30.00</span>
							</div>
							<button type="button" class="remove_btn"><i class="fal fa-trash-alt"></i></button>
						</li>
						<li>
							<div class="item_image">
								<img src="assets/images/cart/img_01.jpg" alt="image_not_found"/>
							</div>
							<div class="item_content">
								<h4 class="item_title">Yellow Blouse</h4>
								<span class="item_price">$30.00</span>
							</div>
							<button type="button" class="remove_btn"><i class="fal fa-trash-alt"></i></button>
						</li>
						<li>
							<div class="item_image">
								<img src="assets/images/cart/img_01.jpg" alt="image_not_found"/>
							</div>
							<div class="item_content">
								<h4 class="item_title">Yellow Blouse</h4>
								<span class="item_price">$30.00</span>
							</div>
							<button type="button" class="remove_btn"><i class="fal fa-trash-alt"></i></button>
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
						<li><a href="shop_cart.html">View Cart</a></li>
						<li><a href="shop_checkout.html">Checkout</a></li>
					</ul>
				</div>

				<div class="sidebar_mobile_menu">
					<button type="button" class="close_btn"><i class="fal fa-times"></i></button>

					<div class="msb_widget brand_logo text-center">
						<a href="index.html">
							<img src="assets/images/logo/logo_25_1x.png" srcset="assets/images/logo/logo_25_2x.png 2x" alt="logo_not_found"/>
						</a>
					</div>

					<div class="msb_widget mobile_menu_list clearfix">
						<h3 class="title_text mb_15 text-uppercase"><i class="far fa-bars mr-2"></i> Menu List</h3>
						<ul class="ul_li_block clearfix">
							<li class="active dropdown">
								<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
								<ul class="ul_li_block dropdown-menu">
									<li><a href="home_carparts.html">Carparts</a></li>
									<li><a href="home_classic_ecommerce.html">Classic Ecommerce</a></li>
									<li><a href="home_creative_onelook.html">Creative Onelook</a></li>
									<li><a href="home_electronic.html">Electronic</a></li>
									<li><a href="home_fashion.html">Fashion</a></li>
									<li><a href="home_fashion_minimal.html">Fashion Minimal</a></li>
									<li><a href="home_furniture.html">Furniture</a></li>
									<li><a href="home_gadget.html">Gadget</a></li>
									<li><a href="home_lookbook_creative.html">Lookbook Creative</a></li>
									<li><a href="home_lookbook_slide.html">Lookbook Slide</a></li>
									<li><a href="home_medical.html">Medical</a></li>
									<li><a href="home_modern.html">Modern</a></li>
									<li><a href="home_modern_minimal.html">Modern Minimal</a></li>
									<li><a href="home_motorcycle.html">Motorcycle</a></li>
									<li><a href="home_parallax_shop.html">Parallax Shop</a></li>
									<li><a href="home_simple_shop.html">Simple Shop</a></li>
									<li><a href="home_single_story_black.html">Single Story Black</a></li>
									<li><a href="home_single_story_white.html">Single Story White</a></li>
									<li><a href="home_sports.html">Sports</a></li>
									<li><a href="home_supermarket.html">Supermarket</a></li>
									<li><a href="home_watch.html">Watch</a></li>
								</ul>
							</li>
							<li class="dropdown">
								<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
								<ul class="dropdown-menu">
									<li class="dropdown ul_li_block">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Carparts</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="carparts_shop.html">Shop Page</a></li>
											<li><a href="carparts_shop_grid.html">Shop Grid</a></li>
											<li><a href="carparts_shop_list.html">Shop List</a></li>
											<li><a href="carparts_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Classic Ecommerce</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="classic_ecommerce_shop.html">Shop Page</a></li>
											<li><a href="classic_ecommerce_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Electronic</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="electronic_shop.html">Shop Page</a></li>
											<li><a href="electronic_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fashion</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="fashion_shop.html">Shop Page</a></li>
											<li><a href="fashion_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fashion Minimal</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="fashion_minimal_shop.html">Shop Page</a></li>
											<li><a href="fashion_minimal_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fashion Minimal</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="fashion_minimal_shop.html">Shop Page</a></li>
											<li><a href="fashion_minimal_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Furniture</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="furniture_shop.html">Shop Page</a></li>
											<li><a href="furniture_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Gadget</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="gadget_shop.html">Shop Page</a></li>
											<li><a href="gadget_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Medical</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="medical_shop.html">Shop Page</a></li>
											<li><a href="medical_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Modern Minimal</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="modern_minimal_shop.html">Shop Page</a></li>
											<li><a href="modern_minimal_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Modern</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="modern_shop.html">Shop Page</a></li>
											<li><a href="modern_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Motorcycle</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="motorcycle_shop_grid.html">Shop Grid</a></li>
											<li><a href="motorcycle_shop_list.html">Shop List</a></li>
											<li><a href="motorcycle_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Simple Shop</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="simple_shop.html">Shop Page</a></li>
											<li><a href="simple_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sports</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="sports_shop.html">Shop Page</a></li>
											<li><a href="sports_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Lookbook</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="lookbook_creative_shop.html">Shop Page</a></li>
											<li><a href="lookbook_creative_shop_details.html">Shop Details</a></li>
										</ul>
									</li>

									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop Other Pages</a>
										<ul class="dropdown-menu ul_li_block">
											<li><a href="#!"><del>Shop Page</del></a></li>
											<li><a href="shop_details.html">Shop Details</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li class="dropdown">
								<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
								<ul class="dropdown-menu">
									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop Inner Pages</a>
										<ul class="dropdown-menu">
											<li><a href="shop_cart.html">Shopping Cart</a></li>
											<li><a href="shop_checkout.html">Checkout Step 1</a></li>
											<li><a href="shop_checkout_step2.html">Checkout Step 2</a></li>
											<li><a href="shop_checkout_step3.html">Checkout Step 3</a></li>
										</ul>
									</li>
									<li><a href="404.html">404 Page</a></li>
									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blogs</a>
										<ul class="dropdown-menu">
											<li><a href="blog.html">Blog Page</a></li>
											<li><a href="blog_details.html">Blog Details</a></li>
										</ul>
									</li>
									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Compare</a>
										<ul class="dropdown-menu">
											<li><a href="compare_1.html">Compare V.1</a></li>
											<li><a href="compare_2.html">Compare V.2</a></li>
										</ul>
									</li>
									<li class="dropdown">
										<a href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Register</a>
										<ul class="dropdown-menu">
											<li><a href="login.html">Login</a></li>
											<li><a href="signup.html">Sign Up</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li><a href="contact.html">Conatct</a></li>    
						</ul>
					</div>

					<div class="user_info">
						<h3 class="title_text mb_30 text-uppercase"><i class="fas fa-user mr-2"></i> User Info</h3>
						<div class="profile_info clearfix">
							<div class="user_thumbnail">
								<img src="assets/images/meta/img_01.png" alt="thumbnail_not_found"/>
							</div>
							<div class="user_content">
								<h4 class="user_name">Jone Doe</h4>
								<span class="user_title">Seller</span>
							</div>
						</div>
						<ul class="settings_options ul_li_block clearfix">
							<li><a href="#!"><i class="fal fa-user-circle"></i> Profile</a></li>
							<li><a href="#!"><i class="fal fa-user-cog"></i> Settings</a></li>
							<li><a href="#!"><i class="fal fa-sign-out-alt"></i> Logout</a></li>
						</ul>
					</div>
				</div>

				<div class="overlay"></div>
			</div>
			{/* <!-- sidebar mobile menu & sidebar cart - end */}


			{/* <!-- banner_section - start */}
			<section class="banner_section carparts_banner parallaxie d-flex align-items-center clearfix" data-background="assets/images/banner/car_parts/bg_01.jpg">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-9">
							<div class="banner_content text-center">
								<p>Customize, Modify, Upgrade, Repair, Replace</p>
								<h1 class="text-white">
									SEARCH MATCHING YOUR VEHICLE PARTS
								</h1>
							</div>
						</div>
					</div>
					<form action="#">
						<div class="carparts_search">
							<ul class="ul_li_center clearfix">
								<li>
									<div class="option_select">
										<select>
											<option data-display="Make">Select A Option</option>
											<option value="1">Some option</option>
											<option value="2">Another option</option>
											<option value="3" disabled>A disabled option</option>
											<option value="4">Potato</option>
										</select>
									</div>
								</li>
								<li>
									<div class="form_item">
										<input type="text" name="model" placeholder="model"/>
									</div>
								</li>
								<li>
									<div class="form_item">
										<input type="text" name="year" placeholder="year"/>
									</div>
								</li>
								<li><button type="submit" class="submit_btn bg_carparts_red">Search</button></li>
							</ul>
						</div>
					</form>
				</div>
			</section>
			{/* <!-- banner_section - end */}


			{/* <!-- carparts_policy - start */}
			<section class="carparts_policy d-flex align-items-center clearfix" data-bg-color="#fafafa">
				<div class="container">
					<div class="row mt__50">

						<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
							<div class="carparts_policy_item">
								<div class="item_icon">
									<img src="assets/images/policy/car_parts/icon_01.png" alt="icon_not_found"/>
								</div>
								<div class="item_content">
									<h3 class="item_title">Free Shipping</h3>
									<p>For orders From $50</p>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
							<div class="carparts_policy_item">
								<div class="item_icon">
									<img src="assets/images/policy/car_parts/icon_02.png" alt="icon_not_found"/>
								</div>
								<div class="item_content">
									<h3 class="item_title">Support 24/7</h3>
									<p>Call us anytime</p>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
							<div class="carparts_policy_item">
								<div class="item_icon">
									<img src="assets/images/policy/car_parts/icon_03.png" alt="icon_not_found"/>
								</div>
								<div class="item_content">
									<h3 class="item_title">100% Safety</h3>
									<p>Only secure payments</p>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
							<div class="carparts_policy_item">
								<div class="item_icon">
									<img src="assets/images/policy/car_parts/icon_04.png" alt="icon_not_found"/>
								</div>
								<div class="item_content">
									<h3 class="item_title">Hot Offers</h3>
									<p>Discounts up to 90%</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
			{/* <!-- carparts_policy - end */}


			{/* <!-- category_section - start */}
			<section class="category_section sec_ptb_100 clearfix">
				<div class="container">

					<div class="carparts_category_carousel clearfix">
						<div class="item">
							<div class="primary_carparts_category">
								<div class="item_offer bg_carparts_red">
									<span>-19</span>
									<span>OFF</span>
								</div>
								<div class="item_image">
									<img src="assets/images/category/car_parts/img_01.png" alt="image_not_found"/>
									<a class="icon_btn bg_carparts_red" href="#!"><i class="fal fa-arrow-right"></i></a>
								</div>
								<div class="item_content">
									<h3 class="item_title">Stoptech</h3>
									<span class="item_instock">(898 items)</span>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="primary_carparts_category">
								<div class="item_offer bg_carparts_red">
									<span>-19</span>
									<span>OFF</span>
								</div>
								<div class="item_image">
									<img src="assets/images/category/car_parts/img_02.png" alt="image_not_found"/>
									<a class="icon_btn bg_carparts_red" href="#!"><i class="fal fa-arrow-right"></i></a>
								</div>
								<div class="item_content">
									<h3 class="item_title">Stoptech</h3>
									<span class="item_instock">(898 items)</span>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="primary_carparts_category">
								<div class="item_offer bg_carparts_red">
									<span>-19</span>
									<span>OFF</span>
								</div>
								<div class="item_image">
									<img src="assets/images/category/car_parts/img_03.png" alt="image_not_found"/>
									<a class="icon_btn bg_carparts_red" href="#!"><i class="fal fa-arrow-right"></i></a>
								</div>
								<div class="item_content">
									<h3 class="item_title">Stoptech</h3>
									<span class="item_instock">(898 items)</span>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="primary_carparts_category">
								<div class="item_offer bg_carparts_red">
									<span>-19</span>
									<span>OFF</span>
								</div>
								<div class="item_image">
									<img src="assets/images/category/car_parts/img_04.png" alt="image_not_found"/>
									<a class="icon_btn bg_carparts_red" href="#!"><i class="fal fa-arrow-right"></i></a>
								</div>
								<div class="item_content">
									<h3 class="item_title">Stoptech</h3>
									<span class="item_instock">(898 items)</span>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="primary_carparts_category">
								<div class="item_offer bg_carparts_red">
									<span>-19</span>
									<span>OFF</span>
								</div>
								<div class="item_image">
									<img src="assets/images/category/car_parts/img_05.png" alt="image_not_found"/>
									<a class="icon_btn bg_carparts_red" href="#!"><i class="fal fa-arrow-right"></i></a>
								</div>
								<div class="item_content">
									<h3 class="item_title">Stoptech</h3>
									<span class="item_instock">(898 items)</span>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="primary_carparts_category">
								<div class="item_offer bg_carparts_red">
									<span>-19</span>
									<span>OFF</span>
								</div>
								<div class="item_image">
									<img src="assets/images/category/car_parts/img_01.png" alt="image_not_found"/>
									<a class="icon_btn bg_carparts_red" href="#!"><i class="fal fa-arrow-right"></i></a>
								</div>
								<div class="item_content">
									<h3 class="item_title">Stoptech</h3>
									<span class="item_instock">(898 items)</span>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="primary_carparts_category">
								<div class="item_offer bg_carparts_red">
									<span>-19</span>
									<span>OFF</span>
								</div>
								<div class="item_image">
									<img src="assets/images/category/car_parts/img_02.png" alt="image_not_found"/>
									<a class="icon_btn bg_carparts_red" href="#!"><i class="fal fa-arrow-right"></i></a>
								</div>
								<div class="item_content">
									<h3 class="item_title">Stoptech</h3>
									<span class="item_instock">(898 items)</span>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="primary_carparts_category">
								<div class="item_offer bg_carparts_red">
									<span>-19</span>
									<span>OFF</span>
								</div>
								<div class="item_image">
									<img src="assets/images/category/car_parts/img_03.png" alt="image_not_found"/>
									<a class="icon_btn bg_carparts_red" href="#!"><i class="fal fa-arrow-right"></i></a>
								</div>
								<div class="item_content">
									<h3 class="item_title">Stoptech</h3>
									<span class="item_instock">(898 items)</span>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="primary_carparts_category">
								<div class="item_offer bg_carparts_red">
									<span>-19</span>
									<span>OFF</span>
								</div>
								<div class="item_image">
									<img src="assets/images/category/car_parts/img_04.png" alt="image_not_found"/>
									<a class="icon_btn bg_carparts_red" href="#!"><i class="fal fa-arrow-right"></i></a>
								</div>
								<div class="item_content">
									<h3 class="item_title">Stoptech</h3>
									<span class="item_instock">(898 items)</span>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="primary_carparts_category">
								<div class="item_offer bg_carparts_red">
									<span>-19</span>
									<span>OFF</span>
								</div>
								<div class="item_image">
									<img src="assets/images/category/car_parts/img_05.png" alt="image_not_found"/>
									<a class="icon_btn bg_carparts_red" href="#!"><i class="fal fa-arrow-right"></i></a>
								</div>
								<div class="item_content">
									<h3 class="item_title">Stoptech</h3>
									<span class="item_instock">(898 items)</span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
			{/* <!-- category_section - end */}


			{/* <!-- deals_section - start */}
			<section class="deals_section sec_ptb_100 clearfix" data-background="assets/images/backgrounds/bg_01.jpg">
				<div class="container">
					<div class="carparts_section_title">
						<h2 class="title_text">Flash Deals</h2>
						<span class="sub_title">Customize, Modify, Upgrade</span>
					</div>

					<div class="row justify-content-lg-between">
						<div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
							<div class="carparts_deals_carousel position-relative">
								<div class="slideshow1_slider" data-slick='{"dots": false}'>
									<div class="item">
										<div class="carparts_deals_listlayout clearfix">
											<div class="deals_image">
												<img src="assets/images/deals/car_parts/img_01.jpg" alt="image_not_found"/>
											</div>
											<div class="deals_content">
												<span class="discount_text">GET 25% DISCOUNT</span>
												<h3 class="item_title">
													DODGE RAM 1500 BALL JOINT FRONT
												</h3>
												<ul class="countdown_timer timein_box ul_li clearfix" data-countdown="2021/3/24"></ul>
												<strong class="price_text">$ 236.25</strong>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua.
												</p>
												<a class="custom_btn btn_sm bg_carparts_red text-uppercase" href="#!">Shop Now</a>
											</div>
										</div>
									</div>

									<div class="item">
										<div class="carparts_deals_listlayout clearfix">
											<div class="deals_image">
												<img src="assets/images/deals/car_parts/img_01.jpg" alt="image_not_found"/>
											</div>
											<div class="deals_content">
												<span class="discount_text">GET 25% DISCOUNT</span>
												<h3 class="item_title">
													DODGE RAM 1500 BALL JOINT FRONT
												</h3>
												<ul class="countdown_timer timein_box ul_li clearfix" data-countdown="2021/3/24"></ul>
												<strong class="price_text">$ 236.25</strong>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua.
												</p>
												<a class="custom_btn btn_sm bg_carparts_red text-uppercase" href="#!">Shop Now</a>
											</div>
										</div>
									</div>

									<div class="item">
										<div class="carparts_deals_listlayout clearfix">
											<div class="deals_image">
												<img src="assets/images/deals/car_parts/img_01.jpg" alt="image_not_found"/>
											</div>
											<div class="deals_content">
												<span class="discount_text">GET 25% DISCOUNT</span>
												<h3 class="item_title">
													DODGE RAM 1500 BALL JOINT FRONT
												</h3>
												<ul class="countdown_timer timein_box ul_li clearfix" data-countdown="2021/3/24"></ul>
												<strong class="price_text">$ 236.25</strong>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua.
												</p>
												<a class="custom_btn btn_sm bg_carparts_red text-uppercase" href="#!">Shop Now</a>
											</div>
										</div>
									</div>
								</div>
								<div class="carousel_nav clearfix">
									<button type="button" class="left_arrow"><i class="fal fa-angle-left"></i></button>
									<button type="button" class="right_arrow"><i class="fal fa-angle-right"></i></button>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
							<div class="carparts_store_info text-white" data-background="assets/images/home_car_parts/img_01.jpg">
								<h3 class="item_title">
									DODGE RAM 1500 BALL JOINT FRONT
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
								</p>
								<ul class="ul_li_block clearfix">
									<li><a href="#!">Wishlist</a></li>
									<li><a href="#!">My account</a></li>
									<li><a href="#!">Store Locator</a></li>
									<li><a href="#!">F.A.Q.</a></li>
									<li><a href="#!">Wishlist</a></li>
									<li><a href="#!">My account</a></li>
									<li><a href="#!">Store Locator</a></li>
									<li><a href="#!">F.A.Q.</a></li>
								</ul>
								<a class="custom_btn btn_sm bg_carparts_red text-uppercase" href="#!">Shop Now</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- deals_section - end */}


			{/* <!-- product_section - start */}
			<section class="product_section sec_ptb_100 clearfix">
				<div class="container">

					<div class="carparts_section_title text-center mb_15">
						<h2 class="title_text">All of Our Products</h2>
						<span class="sub_title">Customize, Modify, Upgrade, Repair, Replace</span>
					</div>

					<div class="tab_wrap position-relative">
						<ul class="carparts_block_tabs nav ul_li_block clearfix" role="tablist">
							<li>
								<a class="active" data-toggle="tab" href="#service_tab">Service Kit</a>
							</li>
							<li>
								<a data-toggle="tab" href="#lighting1_tab">Lighting</a>
							</li>
							<li>
								<a data-toggle="tab" href="#trending_tab">Trending</a>
							</li>
							<li>
								<a data-toggle="tab" href="#lighting2_tab">Lighting</a>
							</li>
						</ul>
						<div class="tab-content mb_50 clearfix">
							<div id="service_tab" class="tab-pane active">
								<div class="row justify-content-center">
									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
									<div class="carparts_product_grid" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_01.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">Shock Absorber</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
										<ul class="product_label ul_li text-uppercase clearfix">
											<li class="bg_carparts_red">New</li>
											<li class="bg_carparts_red">Sale</li>
										</ul>
									</div>
								</div>

								<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
									<div class="carparts_product_grid" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_02.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">Car Parts</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
										<ul class="product_label ul_li text-uppercase clearfix">
											<li class="bg_danger">Hot</li>
										</ul>
									</div>
								</div>

								<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
									<div class="carparts_product_grid" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_03.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">Car Wheel</a>
											</h3>
											<span class="price_text"><strong>$99</strong></span>
										</div>
									</div>
								</div>

								<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
									<div class="carparts_product_grid" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_04.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">Car Engine</a>
											</h3>
											<span class="price_text"><strong>$229.90</strong> <del>$428.90</del></span>
										</div>
										<ul class="product_label ul_li text-uppercase clearfix">
											<li class="bg_carparts_red">New</li>
										</ul>
									</div>
								</div>

								<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
									<div class="carparts_product_grid" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_05.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">Lorem Lipsum</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong></span>
										</div>
									</div>
								</div>

								<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
									<div class="carparts_product_grid" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_06.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
										<ul class="product_label ul_li text-uppercase clearfix">
											<li class="bg_carparts_red">New</li>
											<li class="bg_carparts_red">Sale</li>
										</ul>
									</div>
								</div>

								<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
									<div class="carparts_product_grid" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_07.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
										<ul class="product_label ul_li text-uppercase clearfix">
											<li class="bg_carparts_red">New</li>
											<li class="bg_carparts_red">Sale</li>
										</ul>
									</div>
								</div>

								<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
									<div class="carparts_product_grid" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_07.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
										<ul class="product_label ul_li text-uppercase clearfix">
											<li class="bg_carparts_red">New</li>
											<li class="bg_carparts_red">Sale</li>
										</ul>
									</div>
								</div>

								<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
									<div class="carparts_product_grid" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_08.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone parts</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
										<ul class="product_label ul_li text-uppercase clearfix">
											<li class="bg_carparts_red">Sale</li>
										</ul>
									</div>
								</div>

								<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
									<div class="carparts_product_grid" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_09.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">ear speaker</a>
											</h3>
											<span class="price_text"><strong>$49.90</strong> <del>$58.90</del></span>
										</div>
										<ul class="product_label ul_li text-uppercase clearfix">
											<li class="bg_carparts_red">Discount</li>
										</ul>
									</div>
								</div>

								<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
									<div class="carparts_product_grid" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_10.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">Car Boower</a>
											</h3>
											<span class="price_text"><strong>$299.90</strong></span>
										</div>
									</div>
								</div>

								<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
									<div class="carparts_product_grid" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_11.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">Car Tyer</a>
											</h3>
											<span class="price_text"><strong>$499.90</strong> <del>$698.90</del></span>
										</div>
										<ul class="product_label ul_li text-uppercase clearfix">
											<li class="bg_carparts_red">New</li>
											<li class="bg_carparts_red">Sale</li>
										</ul>
									</div>
								</div>
								</div>
							</div>

							<div id="lighting1_tab" class="tab-pane fade">
								<div class="row justify-content-center">
									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_01.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_02.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$39.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_03.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_04.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_05.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_06.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_07.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_08.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_09.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_10.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_11.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_12.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div id="trending_tab" class="tab-pane fade">
								<div class="row justify-content-center">
									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_01.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_02.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_03.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_04.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_05.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_06.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_07.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_08.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_09.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_10.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_11.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_12.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div id="lighting2_tab" class="tab-pane fade">
								<div class="row justify-content-center">
									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_01.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_02.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_03.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_04.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_05.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_06.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_07.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_08.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_09.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_10.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_11.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>

									<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
										<div class="carparts_product_grid" data-bg-color="#f0eeee">
											<div class="item_image" data-bg-color="#f8f8f8">
												<img src="assets/images/shop/car_parts/img_12.png" alt="image_not_found"/>
												<ul class="product_action_btns ul_li_center clearfix">
													<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
													<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
												</ul>
											</div>
											<div class="item_content">
												<ul class="rating_star ul_li clearfix">
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fas fa-star"></i></li>
													<li><i class="fal fa-star"></i></li>
												</ul>
												<h3 class="item_title">
													<a href="#!">earphone case</a>
												</h3>
												<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
											</div>
											<ul class="product_label ul_li text-uppercase clearfix">
												<li class="bg_carparts_red">Sale</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="load_more text-center clearfix">
							<a class="custom_btn bg_carparts_red text-uppercase" href="#!">View More</a>
						</div>
					</div>

				</div>
			</section>
			{/* <!-- product_section - end */}


			{/* <!-- interior_carparts_section - start */}
			<section class="interior_carparts_section sec_ptb_100 clearfix" data-background="assets/images/backgrounds/bg_02.jpg">
				<div class="container">
					<div class="row mt__30">

						<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
							<div class="Interior_carparts">
								<img src="assets/images/category/car_parts/img_06.jpg" alt="image_not_found"/>
								<div class="item_content">
									<span class="sub_title">Customize, Modify</span>
									<h3 class="item_title text-white">Interior Parts</h3>
									<a class="custom_btn btn_sm bg_carparts_red text-uppercase" href="#!">Shop Now</a>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
							<div class="Interior_carparts">
								<img src="assets/images/category/car_parts/img_07.jpg" alt="image_not_found"/>
								<div class="item_content">
									<span class="sub_title">Customize, Modify</span>
									<h3 class="item_title text-white">Interior Parts</h3>
									<a class="custom_btn btn_sm bg_carparts_red text-uppercase" href="#!">Shop Now</a>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
							<div class="Interior_carparts">
								<img src="assets/images/category/car_parts/img_08.jpg" alt="image_not_found"/>
								<div class="item_content">
									<span class="sub_title">Customize, Modify</span>
									<h3 class="item_title text-white">Interior Parts</h3>
									<a class="custom_btn btn_sm bg_carparts_red text-uppercase" href="#!">Shop Now</a>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
			{/* <!-- interior_carparts_section - end */}


			{/* <!-- product_section - start */}
			<section class="product_section sec_ptb_100 pb-0 clearfix">
				<div class="container">

					<div class="row mb_15 align-items-end justify-content-lg-between">
						<div class="col-lg-6">
							<div class="carparts_section_title">
								<h2 class="title_text">All of Our Products</h2>
								<span class="sub_title">Customize, Modify, Upgrade, Repair, Replace</span>
							</div>
						</div>

						<div class="col-lg-6">
							<ul class="carparts_inline_tabs nav ul_li_right" role="tablist">
								<li>
									<a class="active" data-toggle="tab" href="#stoptech_tab">Stoptech</a>
								</li>
								<li>
									<a data-toggle="tab" href="#wheeltire_tab">Wheel & Tire</a>
								</li>
								<li>
									<a data-toggle="tab" href="#camera_tab">Camera</a>
								</li>
								<li>
									<a data-toggle="tab" href="#bodyparts_tab">Auto Body Parts</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="tab-content has_multy_carousel mb_50">
						<div id="stoptech_tab" class="tab-pane active">
							<div class="product3_collumn_carousel row arrow_ycenter" data-slick='{"dots": false}'>
								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_13.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_14.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_15.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_13.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_14.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_15.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div id="wheeltire_tab" class="tab-pane fade">
							<div class="product3_collumn_carousel row arrow_ycenter" data-slick='{"dots": false}'>
								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_13.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_14.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_15.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_13.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_14.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_15.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div id="camera_tab" class="tab-pane fade">
							<div class="product3_collumn_carousel row arrow_ycenter" data-slick='{"dots": false}'>
								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_13.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_14.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_15.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_13.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_14.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_15.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div id="bodyparts_tab" class="tab-pane fade">
							<div class="product3_collumn_carousel row arrow_ycenter" data-slick='{"dots": false}'>
								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_13.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_14.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_15.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_13.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_14.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
										<div class="item_image" data-bg-color="#f8f8f8">
											<img src="assets/images/shop/car_parts/img_15.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<ul class="rating_star ul_li clearfix">
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fas fa-star"></i></li>
												<li><i class="fal fa-star"></i></li>
											</ul>
											<h3 class="item_title">
												<a href="#!">earphone case</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="load_more text-center clearfix">
						<a class="custom_btn bg_carparts_red text-uppercase" href="#!">View More</a>
					</div>

				</div>
			</section>
			{/* <!-- product_section - end */}


			{/* <!-- interior_carparts_section - start */}
			<section class="interior_carparts_section sec_ptb_100 clearfix">
				<div class="container">
					<div class="row justify-content-center">

						<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div class="Interior_carparts">
								<img src="assets/images/category/car_parts/img_09.jpg" alt="image_not_found"/>
								<div class="item_content">
									<span class="sub_title">Customize, Modify</span>
									<h3 class="item_title text-white mb-0">Interior Parts</h3>
									<ul class="parts_category_list ul_li_block text-white clearfix">
										<li><a href="#!">Wheel Hubs</a></li>
										<li><a href="#!">Air Suspension</a></li>
										<li><a href="#!">Ball Joints</a></li>
										<li><a href="#!">Brake Discs</a></li>
									</ul>
									<a class="icon_btn btn_sm bg_carparts_red text-uppercase" href="#!"><i class="fal fa-arrow-right"></i></a>
								</div>
							</div>
						</div>

						<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div class="Interior_carparts">
								<img src="assets/images/category/car_parts/img_10.jpg" alt="image_not_found"/>
								<div class="item_content">
									<span class="sub_title">Customize, Modify</span>
									<h3 class="item_title text-white mb-0">Interior Parts</h3>
									<ul class="parts_category_list ul_li_block text-white clearfix">
										<li><a href="#!">Wheel Hubs</a></li>
										<li><a href="#!">Air Suspension</a></li>
										<li><a href="#!">Ball Joints</a></li>
										<li><a href="#!">Brake Discs</a></li>
									</ul>
									<a class="icon_btn btn_sm bg_carparts_red text-uppercase" href="#!"><i class="fal fa-arrow-right"></i></a>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
			{/* <!-- interior_carparts_section - end */}


			{/* <!-- deals_section - start */}
			<section class="deals_section sec_ptb_100 clearfix" data-bg-color="#fef8ef">
				<div class="container">

					<div class="carparts_section_title text-center mb_15">
						<h2 class="title_text">Discount Deal Product</h2>
						<span class="sub_title">Customize, Modify, Upgrade, Repair, Replace</span>
					</div>

					<div class="row">
						<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
							<div class="carparts_dealsgrid_carousel slideshow1_slider mb-0 row" data-slick='{"arrows": false}'>
								<div class="item col">
									<div class="carparts_deals_grid">
										<div class="discount_content bg_carparts_red">
											<h4 class="discount_text text-white">Deal Of the Day <span>-40%</span></h4>
										</div>
										<div class="item_image">
											<img src="assets/images/deals/car_parts/img_02.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<h3 class="item_title">
												<a href="#!">Brake Discs & Pads</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$50.00</del></span>
											<ul class="countdown_timer content_inbox ul_li clearfix" data-countdown="2021/3/24"></ul>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_deals_grid">
										<div class="discount_content bg_carparts_red">
											<h4 class="discount_text text-white">Deal Of the Day <span>-40%</span></h4>
										</div>
										<div class="item_image">
											<img src="assets/images/deals/car_parts/img_03.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<h3 class="item_title">
												<a href="#!">Two Clutch Disc</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$50.00</del></span>
											<ul class="countdown_timer content_inbox ul_li clearfix" data-countdown="2021/3/24"></ul>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_deals_grid">
										<div class="discount_content bg_carparts_red">
											<h4 class="discount_text text-white">Deal Of the Day <span>-40%</span></h4>
										</div>
										<div class="item_image">
											<img src="assets/images/deals/car_parts/img_04.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<h3 class="item_title">
												<a href="#!">Set of Four 19 Inch</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$50.00</del></span>
											<ul class="countdown_timer content_inbox ul_li clearfix" data-countdown="2021/3/24"></ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
							<div class="carparts_dealsgrid_carousel slideshow1_slider mb-0 row" data-slick='{"arrows": false}'>
								<div class="item col">
									<div class="carparts_deals_grid">
										<div class="discount_content bg_carparts_red">
											<h4 class="discount_text text-white">Deal Of the Day <span>-40%</span></h4>
										</div>
										<div class="item_image">
											<img src="assets/images/deals/car_parts/img_03.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<h3 class="item_title">
												<a href="#!">Two Clutch Disc</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$50.00</del></span>
											<ul class="countdown_timer content_inbox ul_li clearfix" data-countdown="2021/3/24"></ul>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_deals_grid">
										<div class="discount_content bg_carparts_red">
											<h4 class="discount_text text-white">Deal Of the Day <span>-40%</span></h4>
										</div>
										<div class="item_image">
											<img src="assets/images/deals/car_parts/img_04.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<h3 class="item_title">
												<a href="#!">Set of Four 19 Inch</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$50.00</del></span>
											<ul class="countdown_timer content_inbox ul_li clearfix" data-countdown="2021/3/24"></ul>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_deals_grid">
										<div class="discount_content bg_carparts_red">
											<h4 class="discount_text text-white">Deal Of the Day <span>-40%</span></h4>
										</div>
										<div class="item_image">
											<img src="assets/images/deals/car_parts/img_02.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<h3 class="item_title">
												<a href="#!">Brake Discs & Pads</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$50.00</del></span>
											<ul class="countdown_timer content_inbox ul_li clearfix" data-countdown="2021/3/24"></ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
							<div class="carparts_dealsgrid_carousel slideshow1_slider mb-0 row" data-slick='{"arrows": false}'>
								<div class="item col">
									<div class="carparts_deals_grid">
										<div class="discount_content bg_carparts_red">
											<h4 class="discount_text text-white">Deal Of the Day <span>-40%</span></h4>
										</div>
										<div class="item_image">
											<img src="assets/images/deals/car_parts/img_04.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<h3 class="item_title">
												<a href="#!">Set of Four 19 Inch</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$50.00</del></span>
											<ul class="countdown_timer content_inbox ul_li clearfix" data-countdown="2021/3/24"></ul>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_deals_grid">
										<div class="discount_content bg_carparts_red">
											<h4 class="discount_text text-white">Deal Of the Day <span>-40%</span></h4>
										</div>
										<div class="item_image">
											<img src="assets/images/deals/car_parts/img_02.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<h3 class="item_title">
												<a href="#!">Brake Discs & Pads</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$50.00</del></span>
											<ul class="countdown_timer content_inbox ul_li clearfix" data-countdown="2021/3/24"></ul>
										</div>
									</div>
								</div>

								<div class="item col">
									<div class="carparts_deals_grid">
										<div class="discount_content bg_carparts_red">
											<h4 class="discount_text text-white">Deal Of the Day <span>-40%</span></h4>
										</div>
										<div class="item_image">
											<img src="assets/images/deals/car_parts/img_03.png" alt="image_not_found"/>
											<ul class="product_action_btns ul_li_center clearfix">
												<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
												<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
											</ul>
										</div>
										<div class="item_content">
											<h3 class="item_title">
												<a href="#!">Two Clutch Disc</a>
											</h3>
											<span class="price_text"><strong>$29.90</strong> <del>$50.00</del></span>
											<ul class="countdown_timer content_inbox ul_li clearfix" data-countdown="2021/3/24"></ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- deals_section - end */}


			{/* <!-- product_section - start */}
			<section class="product_section sec_ptb_100 clearfix">
				<div class="container">
					<div class="carparts_section_title text-center mb_15">
						<h2 class="title_text">Sale Product</h2>
						<span class="sub_title">Customize, Modify, Upgrade, Repair, Replace</span>
					</div>

					<div class="product3_collumn_carousel row arrow_ycenter mb_50" data-slick='{"dots": false}'>
						<div class="item col">
							<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
								<div class="item_image" data-bg-color="#f8f8f8">
									<img src="assets/images/shop/car_parts/img_16.png" alt="image_not_found"/>
									<ul class="product_action_btns ul_li_center clearfix">
										<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
										<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
										<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
									</ul>
								</div>
								<div class="item_content">
									<ul class="rating_star ul_li clearfix">
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fal fa-star"></i></li>
									</ul>
									<h3 class="item_title">
										<a href="#!">earphone case</a>
									</h3>
									<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
								</div>
							</div>
						</div>

						<div class="item col">
							<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
								<div class="item_image" data-bg-color="#f8f8f8">
									<img src="assets/images/shop/car_parts/img_17.png" alt="image_not_found"/>
									<ul class="product_action_btns ul_li_center clearfix">
										<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
										<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
										<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
									</ul>
								</div>
								<div class="item_content">
									<ul class="rating_star ul_li clearfix">
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fal fa-star"></i></li>
									</ul>
									<h3 class="item_title">
										<a href="#!">earphone case</a>
									</h3>
									<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
								</div>
							</div>
						</div>

						<div class="item col">
							<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
								<div class="item_image" data-bg-color="#f8f8f8">
									<img src="assets/images/shop/car_parts/img_18.png" alt="image_not_found"/>
									<ul class="product_action_btns ul_li_center clearfix">
										<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
										<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
										<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
									</ul>
								</div>
								<div class="item_content">
									<ul class="rating_star ul_li clearfix">
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fal fa-star"></i></li>
									</ul>
									<h3 class="item_title">
										<a href="#!">earphone case</a>
									</h3>
									<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
								</div>
							</div>
						</div>

						<div class="item col">
							<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
								<div class="item_image" data-bg-color="#f8f8f8">
									<img src="assets/images/shop/car_parts/img_16.png" alt="image_not_found"/>
									<ul class="product_action_btns ul_li_center clearfix">
										<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
										<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
										<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
									</ul>
								</div>
								<div class="item_content">
									<ul class="rating_star ul_li clearfix">
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fal fa-star"></i></li>
									</ul>
									<h3 class="item_title">
										<a href="#!">earphone case</a>
									</h3>
									<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
								</div>
							</div>
						</div>

						<div class="item col">
							<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
								<div class="item_image" data-bg-color="#f8f8f8">
									<img src="assets/images/shop/car_parts/img_17.png" alt="image_not_found"/>
									<ul class="product_action_btns ul_li_center clearfix">
										<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
										<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
										<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
									</ul>
								</div>
								<div class="item_content">
									<ul class="rating_star ul_li clearfix">
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fal fa-star"></i></li>
									</ul>
									<h3 class="item_title">
										<a href="#!">earphone case</a>
									</h3>
									<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
								</div>
							</div>
						</div>

						<div class="item col">
							<div class="carparts_product_grid column_3" data-bg-color="#f0eeee">
								<div class="item_image" data-bg-color="#f8f8f8">
									<img src="assets/images/shop/car_parts/img_18.png" alt="image_not_found"/>
									<ul class="product_action_btns ul_li_center clearfix">
										<li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
										<li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
										<li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" data-target="#quickview_modal"><i class="fal fa-search"></i></a></li>
									</ul>
								</div>
								<div class="item_content">
									<ul class="rating_star ul_li clearfix">
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fal fa-star"></i></li>
									</ul>
									<h3 class="item_title">
										<a href="#!">earphone case</a>
									</h3>
									<span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
								</div>
							</div>
						</div>
					</div>

					<div class="load_more text-center clearfix">
						<a class="custom_btn bg_carparts_red text-uppercase" href="#!">View More</a>
					</div>
				</div>
			</section>
			{/* <!-- product_section - end */}


			{/* <!-- new_carparts_section - start */}
			<section class="new_carparts_section sec_ptb_100 parallaxie black_overlay clearfix" data-background="assets/images/backgrounds/bg_03.jpg">
				<div class="container">
					<div class="carparts_section_title mb_15">
						<h2 class="title_text text-white">Sale Product</h2>
						<span class="sub_title">Customize, Modify, Upgrade, Repair, Replace</span>
					</div>

					<div class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
						<div class="col-lg-8 col-md-8 col-sm-10 col-xs-12">
							<ul class="new_carparts_images ul_li clearfix">
								<li>
									<img src="assets/images/shop/car_parts/img_19.jpg" alt="image_not_found"/>
								</li>
								<li>
									<img src="assets/images/shop/car_parts/img_20.jpg" alt="image_not_found"/>
								</li>
							</ul>
						</div>

						<div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
							<div class="new_carparts_content text-white">
								<h2 class="item_title text-white">
									Find Parts That Fit Your Vehicle
								</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua.
								</p>
								<a class="custom_btn bg_carparts_red text-uppercase" href="#!">View More</a>
							</div>
						</div>
					</div>

				</div>
			</section>
			{/* <!-- new_carparts_section - end */}


			{/* <!-- blog_section - start */}
			<section class="blog_section sec_ptb_100 pb-0 clearfix">
				<div class="container">

					<div class="carparts_blog_listlayout">
						<div class="row align-items-center justify-content-lg-between">
							<div class="col-lg-7 col-md-6 col-sm-12 col-xs-12">
								<div class="item_image">
									<img src="assets/images/blog/car_parts/img_01.jpg" alt="image_not_found"/>
								</div>
							</div>
							<div class="col-lg-5 col-md-6 col-sm-12 col-xs-12">
								<div class="item_content">
									<span class="post_date"><strong>JUNE 12, 2020</strong> -  AUTO PARTS, BRAKES  BY APAR</span>
									<h3 class="item_title">Popular Trending</h3>
									<p>
										While they were the darling of the “yuppie” class when new, the E30 and E36 BMW 3-Series from the 1980’s and 1990’s have now settled somewhere between. Oddly enough, it’s the 3-hole box that’s stronger, so that’s what we carry. If your car is originally equipped with a 4-mount-hole gear box, this 3-hole variant will still bolt in exactly the same as OEM.
									</p>
									<a href="#!" class="custom_btn bg_carparts_red text-uppercase">Read More</a>
								</div>
							</div>
						</div>
					</div>

					<div class="carparts_blog_listlayout">
						<div class="row align-items-center justify-content-lg-between">
							<div class="col-lg-7 col-md-6 col-sm-12 col-xs-12 order-last">
								<div class="item_image">
									<img src="assets/images/blog/car_parts/img_02.jpg" alt="image_not_found"/>
								</div>
							</div>
							<div class="col-lg-5 col-md-6 col-sm-12 col-xs-12">
								<div class="item_content">
									<span class="post_date"><strong>JUNE 12, 2020</strong> -  AUTO PARTS, BRAKES  BY APAR</span>
									<h3 class="item_title">Popular Trending</h3>
									<p>
										While they were the darling of the “yuppie” class when new, the E30 and E36 BMW 3-Series from the 1980’s and 1990’s have now settled somewhere between. Oddly enough, it’s the 3-hole box that’s stronger, so that’s what we carry. If your car is originally equipped with a 4-mount-hole gear box, this 3-hole variant will still bolt in exactly the same as OEM.
									</p>
									<a href="#!" class="custom_btn bg_carparts_red text-uppercase">Read More</a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
			{/* <!-- blog_section - end */}


			{/* <!-- barnd_section - start */}
			<div class="barnd_section sec_ptb_100 clearfix">
				<div class="container">
					<div class="barnd_carousel clearfix">
						<div class="item">
							<a class="brand_item" href="#!">
								<img src="assets/images/brands/img_01.png" alt="image_not_found"/>
							</a>
						</div>

						<div class="item">
							<a class="brand_item" href="#!">
								<img src="assets/images/brands/img_02.png" alt="image_not_found"/>
							</a>
						</div>

						<div class="item">
							<a class="brand_item" href="#!">
								<img src="assets/images/brands/img_03.png" alt="image_not_found"/>
							</a>
						</div>

						<div class="item">
							<a class="brand_item" href="#!">
								<img src="assets/images/brands/img_04.png" alt="image_not_found"/>
							</a>
						</div>

						<div class="item">
							<a class="brand_item" href="#!">
								<img src="assets/images/brands/img_05.png" alt="image_not_found"/>
							</a>
						</div>

						<div class="item">
							<a class="brand_item" href="#!">
								<img src="assets/images/brands/img_06.png" alt="image_not_found"/>
							</a>
						</div>

						<div class="item">
							<a class="brand_item" href="#!">
								<img src="assets/images/brands/img_01.png" alt="image_not_found"/>
							</a>
						</div>

						<div class="item">
							<a class="brand_item" href="#!">
								<img src="assets/images/brands/img_02.png" alt="image_not_found"/>
							</a>
						</div>

						<div class="item">
							<a class="brand_item" href="#!">
								<img src="assets/images/brands/img_03.png" alt="image_not_found"/>
							</a>
						</div>

						<div class="item">
							<a class="brand_item" href="#!">
								<img src="assets/images/brands/img_04.png" alt="image_not_found"/>
							</a>
						</div>

						<div class="item">
							<a class="brand_item" href="#!">
								<img src="assets/images/brands/img_05.png" alt="image_not_found"/>
							</a>
						</div>

						<div class="item">
							<a class="brand_item" href="#!">
								<img src="assets/images/brands/img_06.png" alt="image_not_found"/>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- barnd_section - end */}


			{/* <!-- carparts_newsletter - start */}
			<section class="carparts_newsletter sec_ptb_100 clearfix" data-bg-color="#ebebeb">
				<div class="container">
					<div class="row align-items-center justify-content-lg-between justify-content-md-between justify-content-sm-center">
						<div class="col-lg-5 col-md-6 col-sm-8 col-xs-12">
							<h2 class="newsletter_title">
								<i class="fal fa-paper-plane"></i>
								Join Our Newsletter Now
							</h2>
						</div>

						<div class="col-lg-6 col-md-6 col-sm-8 col-xs-12">
							<div class="form_item">
								<input type="email" name="email" placeholder="Enter Your Email"/>
								<button type="submit" class="custom_btn bg_carparts_red">SUBCRIBE</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- carparts_newsletter - end */}




		{/* <!-- footer_section - start */}
		<footer class="footer_section carparts_footer text-white clearfix">
			<div class="footer_widget_area sec_ptb_100 clearfix" data-bg-color="#131313">
				<div class="container">
					<div class="row justify-content-lg-between">

						<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
							<div class="footer_widget footer_about">
								<div class="brand_logo mb_30">
									<a href="index.html">
										<img src="assets/images/logo/logo_02_1x.png" srcset="assets/images/logo/logo_02_2x.png 2x" alt="logo_not_found"/>
									</a>
								</div>

								<p>
									This gearbox is an OEM Saginaw casting, fully remanufactured in the USA. All our remanufactured steering gearboxes and racks receive a thorough cleaning and inspection, 
								</p>

								<div class="footer_carparts_hotline">
									<h4>Got questions? Call us 24/7!</h4>
									<span>(800) 8001-8588, (0600) 874 548</span>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
							<div class="footer_widget footer_useful_links clearfix">
								<h3 class="footer_widget_title text-white">Find it Fast</h3>
								<ul class="ul_li_block">
									<li><a href="#!">Laptops & Computers</a></li>
									<li><a href="#!">Cameras & Photography</a></li>
									<li><a href="#!">Smart Phones & Tablets</a></li>
									<li><a href="#!">Video Games & Consoles</a></li>
									<li><a href="#!">TV & Audio</a></li>
									<li><a href="#!">Gadgets</a></li>
									<li><a href="#!">Car Electronic & GPS</a></li>
								</ul>
							</div>
						</div>

						<div class="col-lg-2 col-md-6 col-sm-6 col-xs-12">
							<div class="footer_widget footer_useful_links clearfix">
								<h3 class="footer_widget_title text-white">Customer Care</h3>
								<ul class="ul_li_block">
									<li><a href="#!">My Account</a></li>
									<li><a href="#!">Order Tracking</a></li>
									<li><a href="#!">Wish List</a></li>
									<li><a href="#!">Customer Service</a></li>
									<li><a href="#!">Returns / Exchange</a></li>
									<li><a href="#!">FAQs</a></li>
									<li><a href="#!">Product Support</a></li>
								</ul>
							</div>
						</div>

						<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
							<div class="footer_widget footer_instagram">
								<h3 class="footer_widget_title text-white">Customer Care</h3>
								<ul class="zoom-gallery ul_li clearfix">
									<li>
										<a class="popup_image" href="assets/images/instagram/img_01.jpg">
											<img src="assets/images/instagram/img_01.jpg" alt="image_not_found"/>
										</a>
									</li>
									<li>
										<a class="popup_image" href="assets/images/instagram/img_02.jpg">
											<img src="assets/images/instagram/img_02.jpg" alt="image_not_found"/>
										</a>
									</li>
									<li>
										<a class="popup_image" href="assets/images/instagram/img_03.jpg">
											<img src="assets/images/instagram/img_03.jpg" alt="image_not_found"/>
										</a>
									</li>
									<li>
										<a class="popup_image" href="assets/images/instagram/img_04.jpg">
											<img src="assets/images/instagram/img_04.jpg" alt="image_not_found"/>
										</a>
									</li>
									<li>
										<a class="popup_image" href="assets/images/instagram/img_05.jpg">
											<img src="assets/images/instagram/img_05.jpg" alt="image_not_found"/>
										</a>
									</li>
									<li>
										<a class="popup_image" href="assets/images/instagram/img_06.jpg">
											<img src="assets/images/instagram/img_06.jpg" alt="image_not_found"/>
										</a>
									</li>
								</ul>
								<strong class="brand_name">@neoncart</strong>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div class="footer_bottom clearfix" data-bg-color="#000000">
				<div class="container">
					<div class="row align-items-center justify-content-lg-between">
						<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
							<p class="copyright_text mb-0">© <a href="#!" class="author_link text-white">Neoncart</a> - All rights Reserved</p>
						</div>

						<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
							<div class="payment_methods float-lg-right">
								<img src="assets/images/payment_methods_01.png" alt="image_not_found"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
		{/* <!-- footer_section - end */}

	
		
				{/* <!-- product quick view - start --> */}
		<div class="quickview_modal modal fade" id="quickview_modal" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content clearfix">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<div class="item_image">
						<img src="assets/images/shop/fashion_minimal/img_07.jpg" alt="image_not_found"/>
					</div>
					<div class="item_content">
						<h2 class="item_title mb_15">Digital Infrared Thermometer</h2>
						<div class="rating_star mb_30 clearfix">
							<ul class="float-left ul_li mr-2">
								<li class="active"><i class="las la-star"></i></li>
								<li class="active"><i class="las la-star"></i></li>
								<li class="active"><i class="las la-star"></i></li>
								<li class="active"><i class="las la-star"></i></li>
								<li><i class="las la-star"></i></li>
							</ul>
							<span class="review_text">(12 Reviews)</span>
						</div>
						<span class="item_price mb_15">$49.50</span>
						<p class="mb_30">
							Best Electronic Digital Thermometer adipiscing elit, sed do eiusmod teincididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse us ultrices gravidaes. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
						</p>
						<div class="quantity_form mb_30 clearfix">
							<strong class="list_title">Quantity:</strong>
							<div class="quantity_input">
								<form action="#">
									<span class="input_number_decrement">–</span>
									<input class="input_number" type="text" value="1"/>
									<span class="input_number_increment">+</span>
								</form>
							</div>
						</div>
						<ul class="btns_group ul_li mb_30 clearfix">
							<li><a href="#!" class="custom_btn bg_carparts_red">Add to Cart</a></li>
							<li><a href="#!" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare Product"><i class="fal fa-sync"></i></a></li>
							<li><a href="#!" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Wishlist"><i class="fal fa-heart"></i></a></li>
						</ul>
						<ul class="info_list ul_li_block clearfix">
							<li><strong class="list_title">Category:</strong> <a href="#!">Medical Equipment</a></li>
							<li class="social_icon">
								<strong class="list_title">Share:</strong>
								<ul class="ul_li clearfix">
									<li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
									<li><a href="#!"><i class="fab fa-twitter"></i></a></li>
									<li><a href="#!"><i class="fab fa-instagram"></i></a></li>
									<li><a href="#!"><i class="fab fa-pinterest-p"></i></a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- product quick view - end --> */}
		{/* <!-- shop_section - end */}
		
    </div>
  )
}

export default Dashboard;