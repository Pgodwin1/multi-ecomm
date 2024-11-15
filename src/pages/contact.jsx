import React from 'react'
import { Header } from '../compoent/header';
import Footer from '../compoent/footer';

const Contact = () => {
  return (
    <div>
        <Header />
			{/* <!-- main_contact_section - start */}
			<section class="main_contact_section sec_ptb_100 clearfix" style={{marginTop: "30px"}}>
				<div class="container">
					<div class="row justify-content-lg-between">

						<div class="col-lg-5">
							<div class="main_contact_content">
								<h3 class="title_text mb_15">Get In Touch</h3>
								<p class="mb_50">
									If you are interested in working with us, please get in touch.
								</p>
								<ul class="main_contact_info ul_li_block clearfix">
									<li>
										<span class="icon">
											<i class="fal fa-map-marked-alt"></i>
										</span>
										<p class="mb-0">
											75 South Park Avenue, Melbourne, Australia
										</p>
									</li>
									<li>
										<span class="icon">
											<i class="fal fa-phone-volume"></i>
										</span>
										<p class="mb-0">8 800 567.890.11 - Central Office</p>
									</li>
									<li>
										<span class="icon">
											<i class="fal fa-paper-plane"></i>
										</span>
										<p class="mb-0">Jthemes@gmail.com</p>
									</li>
								</ul>
							</div>
						</div>

						<div class="col-lg-7">
							<div class="main_contact_form">
								<h3 class="title_text mb_30">FeedBack</h3>
								<form action="#">
									<div class="row">
										<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
											<div class="form_item">
												<input type="text" name="name" placeholder="Your Name"/>
											</div>
										</div>

										<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
											<div class="form_item">
												<input type="email" name="email" placeholder="Your Email"/>
											</div>
										</div>

										<div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
											<div class="form_item">
												<input type="text" name="subject" placeholder="Subject"/>
											</div>
										</div>
									</div>

									<div class="form_item">
										<textarea name="message" placeholder="Your Message"></textarea>
									</div>
									<button type="submit" class="custom_btn bg_default_red text-uppercase">view projects</button>
								</form>
							</div>
						</div>
						
					</div>
				</div>
			</section>
			{/* <!-- main_contact_section - end */}
            <Footer />
    </div>
  )
}

export default Contact;