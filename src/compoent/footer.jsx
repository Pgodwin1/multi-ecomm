import React from 'react'

function Footer() {
  return (
      //  {/* <!-- footer_section - start */}
		<footer className="footer_section fashion_footer clearfix">
			<div className="fashion_newsletter_wrap sec_ptb_100 clearfix" data-bg-color="#ebfaff">
				<div className="container">
					<div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
						<div className="col-lg-6 col-md-7 col-sm-9 col-xs-12">
							<div className="fashion_section_title">
								<h2 className="title_text mb_15 text-uppercase">Get Discount 30% off</h2>
								<h4 className="sub_title text-uppercase mb-0">Aenean feugiat libero ligula,</h4>
							</div>
						</div>

						<div className="col-lg-6 col-md-7 col-sm-9 col-xs-12">
							<div className="form_item mb-0">
								<form action="#">
									<input type="email" name="email" placeholder="enter email" />
									<button type="submit" className="submit_btn">Send Now</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ul className="fashion_instagram ul_li zoom-gallery clearfix">
				<li>
					<a className="popup_image" href="assets/images/instagram/img_25.jpg">
						<img src="assets/images/instagram/img_25.jpg" alt="image_not_found" />
					</a>
				</li>
				<li>
					<a className="popup_image" href="assets/images/instagram/img_26.jpg">
						<img src="assets/images/instagram/img_26.jpg" alt="image_not_found" />
					</a>
				</li>
				<li>
					<a className="popup_image" href="assets/images/instagram/img_27.jpg">
						<img src="assets/images/instagram/img_27.jpg" alt="image_not_found" />
					</a>
				</li>
				<li>
					<a className="popup_image" href="assets/images/instagram/img_28.jpg">
						<img src="assets/images/instagram/img_28.jpg" alt="image_not_found" />
					</a>
				</li>
				<li>
					<a className="popup_image" href="assets/images/instagram/img_29.jpg">
						<img src="assets/images/instagram/img_29.jpg" alt="image_not_found" />
					</a>
				</li>
				<li>
					<a className="popup_image" href="assets/images/instagram/img_30.jpg">
						<img src="assets/images/instagram/img_30.jpg" alt="image_not_found" />
					</a>
				</li>
			</ul>

			<div className="footer_bottom clearfix" data-bg-color="#1e1e1e">
				<div className="container">
					<div className="row align-items-center justify-content-lg-between">
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<p className="copyright_text mb-0">© 2021 <a href="#!" className="author_link text-white">NeonCart</a> — eCommerce HTML5 Template.</p>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
							<div className="footer_contact_info text-white clearfix">
								<ul className="ul_li_right">
									<li><i className="fas fa-envelope mr-1"></i> Jthemes@gmail.com</li>
									<li><i className="fas fa-phone-alt mr-1"></i> 8 800 567.890.11</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}

export default Footer